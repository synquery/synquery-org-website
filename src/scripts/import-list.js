/**
 * [synquery-org-webpage] import-list.js
 * src フォルダ内のあるフォルダについてパターンにあてはまるものを見つけて import 文を構築する
 * e.g) for Intl
 *   npm run import-list intl \*.json src/intl=.
 * e.g) for pages
 *   npm run import-list pages \*.md src/pages=. 1
 */
const fs = require('fs'), os = require('os');
const folder = process.argv[2], match = (process.argv[3] || '*').split('.');
const repl = (process.argv[4] || '').split('='), deep = process.argv[5] == 1;
(async g => {
  console.log();
  console.log(`# Loading files from src/${folder} ...`);
  console.log();
  const cmds = [ ], ass = [ ];
  const stack = in_the=>{
    let pushCnt = 0, push = (as, fp)=>{ 
      pushCnt++;
      if(repl.length == 2) { fp = fp.replace(new RegExp('^' + repl[0]), repl[1]); }
      cmds.push(`import ${as} from "${fp}"`);
      ass.push(as);
    };
    fs.readdirSync(in_the).forEach(nm=>{
      const ful = [ in_the, nm ].join('/');
      const is_dir = fs.statSync(ful).isDirectory();
      const reg = new RegExp('^' + match.join('\\.').replace(/\*/, '.*') + '$');
      const as = ( nm.indexOf('.') == -1 ? nm: nm.replace(/\.\w+$/, '') ).replace(/[\.\-]/g, '_');
      if(1 < match.length) {
        // file pattern mode
        if(deep) {
          if(is_dir) return stack(ful);
        } else {
          if(is_dir) return;
        }
        if(reg.test(nm)) push(as, ful);
      } else {
        // directory seek mode
        if(!is_dir) return;
        if(deep) {
          if(stack(ful) === 0 && reg.test(nm)) push(as, ful);
        } else {
          if(reg.test(nm)) push(as, ful);
        }
      }
    });
    return pushCnt;
  };
  stack('src/' + folder);
  let out_i, out_s = '';
  for(out_i = 0;out_i < Math.ceil(ass.length / 5);out_i++) {
    out_s += (out_i == 0 ? os.EOL: '') + '  ' + ass.slice(out_i * 5, (out_i + 1) * 5).join(', ') + ',' + os.EOL;
  }
  console.log(cmds.join(os.EOL));
  console.log(`const imps = {${out_s}};`);
  console.log();
  console.log(`# FIN`);
  console.log();
})(this);