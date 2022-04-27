<div class="home">
<h1 class="page-heading">
SyIP-1: SyIP Purpose and Guidelines
<a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md"><svg role="img" aria-label="Source" xmlns="https://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><title>Source</title><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></a>
</h1>
<h3></h3>
<table>
<tbody><tr><th>Author</th><td><a href="mailto:mb@ethereum.org">Martin Becze</a>, <a href="mailto:hudson@ethereum.org">Hudson Jameson</a>, et al.</td></tr>
<tr><th>Status</th><td>Living
</td></tr>
<tr><th>Type</th><td>Meta</td></tr>
<tr><th>Created</th><td>2015-10-27</td></tr>
</tbody></table>
<div class="toc">
<h2>Table of Contents</h2>
<ul>
<li><a href="#what-is-an-eip">What is an EIP?</a></li>
<li><a href="#eip-rationale">EIP Rationale</a></li>
<li><a href="#eip-types">EIP Types</a>
<ul>
<li><a href="#special-requirements-for-core-eips">Special requirements for Core EIPs</a></li>
</ul>
</li>
<li><a href="#eip-work-flow">EIP Work Flow</a>
<ul>
<li><a href="#shepherding-an-eip">Shepherding an EIP</a></li>
<li><a href="#core-eips">Core EIPs</a></li>
<li><a href="#eip-process">EIP Process</a></li>
</ul>
</li>
<li><a href="#what-belongs-in-a-successful-eip">What belongs in a successful EIP?</a></li>
<li><a href="#eip-formats-and-templates">EIP Formats and Templates</a></li>
<li><a href="#eip-header-preamble">EIP Header Preamble</a></li>
<li><a href="#linking-to-other-eips">Linking to other EIPs</a></li>
<li><a href="#auxiliary-files">Auxiliary Files</a></li>
<li><a href="#transferring-eip-ownership">Transferring EIP Ownership</a></li>
<li><a href="#eip-editors">EIP Editors</a></li>
<li><a href="#eip-editor-responsibilities">EIP Editor Responsibilities</a></li>
<li><a href="#style-guide">Style Guide</a>
<ul>
<li><a href="#eip-numbers">EIP numbers</a></li>
<li><a href="#rfc-2119">RFC 2119</a></li>
</ul>
</li>
<li><a href="#history">History</a></li>
<li><a href="#copyright">Copyright</a></li>
</ul>
</div>
<h2 id="what-is-an-eip">
<a href="#what-is-an-eip" class="anchor-link"></a> What is an EIP?
</h2>
<p>EIP stands for Ethereum Improvement Proposal. An EIP is a design document providing information to the Ethereum community, or describing a new feature for Ethereum or its processes or environment. The EIP should provide a concise technical specification of the feature and a rationale for the feature. The EIP author is responsible for building consensus within the community and documenting dissenting opinions.</p>
<h2 id="eip-rationale">
<a href="#eip-rationale" class="anchor-link"></a> EIP Rationale
</h2>
<p>We intend EIPs to be the primary mechanisms for proposing new features, for collecting community technical input on an issue, and for documenting the design decisions that have gone into Ethereum. Because the EIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.</p>
<p>For Ethereum implementers, EIPs are a convenient way to track the progress of their implementation. Ideally each implementation maintainer would list the EIPs that they have implemented. This will give end users a convenient way to know the current status of a given implementation or library.</p>
<h2 id="eip-types">
<a href="#eip-types" class="anchor-link"></a> EIP Types
</h2>
<p>There are three types of EIP:</p>
<ul>
<li>A <strong>Standards Track EIP</strong> describes any change that affects most or all Ethereum implementations, such as—a change to the network protocol, a change in block or transaction validity rules, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using Ethereum. Standards Track EIPs consist of three parts—a design document, an implementation, and (if warranted) an update to the <a href="https://github.com/ethereum/yellowpaper">formal specification</a>. Furthermore, Standards Track EIPs can be broken down into the following categories:
<ul>
<li><strong>Core</strong>: improvements requiring a consensus fork (e.g. <a href="/EIPS/eip-5">EIP-5</a>, <a href="/EIPS/eip-101">EIP-101</a>), as well as changes that are not necessarily consensus critical but may be relevant to <a href="https://github.com/ethereum/pm">“core dev” discussions</a> (for example, [EIP-90], and the miner/node strategy changes 2, 3, and 4 of <a href="/EIPS/eip-86">EIP-86</a>).</li>
<li><strong>Networking</strong>: includes improvements around <a href="https://github.com/ethereum/wiki/wiki/%C3%90%CE%9EVp2p-Wire-Protocol">devp2p</a> (<a href="/EIPS/eip-8">EIP-8</a>) and <a href="https://github.com/ethereum/wiki/wiki/Light-client-protocol">Light Ethereum Subprotocol</a>, as well as proposed improvements to network protocol specifications of <a href="https://github.com/ethereum/go-ethereum/wiki/Whisper-Overview">whisper</a> and <a href="https://github.com/ethereum/go-ethereum/pull/2959">swarm</a>.</li>
<li><strong>Interface</strong>: includes improvements around client <a href="https://github.com/ethereum/wiki/wiki/JSON-RPC">API/RPC</a> specifications and standards, and also certain language-level standards like method names (<a href="/EIPS/eip-6">EIP-6</a>) and <a href="https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI">contract ABIs</a>. The label “interface” aligns with the [interfaces repo] and discussion should primarily occur in that repository before an EIP is submitted to the EIPs repository.</li>
<li><strong>ERC</strong>: application-level standards and conventions, including contract standards such as token standards (<a href="/EIPS/eip-20">EIP-20</a>), name registries (<a href="/EIPS/eip-137">EIP-137</a>), URI schemes, library/package formats, and wallet formats.</li>
</ul>
</li>
<li>
<p>A <strong>Meta EIP</strong> describes a process surrounding Ethereum or proposes a change to (or an event in) a process. Process EIPs are like Standards Track EIPs but apply to areas other than the Ethereum protocol itself. They may propose an implementation, but not to Ethereum’s codebase; they often require community consensus; unlike Informational EIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Ethereum development. Any meta-EIP is also considered a Process EIP.</p>
</li>
<li>An <strong>Informational EIP</strong> describes an Ethereum design issue, or provides general guidelines or information to the Ethereum community, but does not propose a new feature. Informational EIPs do not necessarily represent Ethereum community consensus or a recommendation, so users and implementers are free to ignore Informational EIPs or follow their advice.</li>
</ul>
<p>It is highly recommended that a single EIP contain a single key proposal or new idea. The more focused the EIP, the more successful it tends to be. A change to one client doesn’t require an EIP; a change that affects multiple clients, or defines a standard for multiple apps to use, does.</p>
<p>An EIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.</p>
<h3 id="special-requirements-for-core-eips">
<a href="#special-requirements-for-core-eips" class="anchor-link"></a> Special requirements for Core EIPs
</h3>
<p>If a <strong>Core</strong> EIP mentions or proposes changes to the EVM (Ethereum Virtual Machine), it should refer to the instructions by their mnemonics and define the opcodes of those mnemonics at least once. A preferred way is the following:</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>REVERT (0xfe)
</code></pre></div></div>
<h2 id="eip-work-flow">
<a href="#eip-work-flow" class="anchor-link"></a> EIP Work Flow
</h2>
<h3 id="shepherding-an-eip">
<a href="#shepherding-an-eip" class="anchor-link"></a> Shepherding an EIP
</h3>
<p>Parties involved in the process are you, the champion or <em>EIP author</em>, the <a href="#eip-editors"><em>EIP editors</em></a>, and the <a href="https://github.com/ethereum/pm"><em>Ethereum Core Developers</em></a>.</p>
<p>Before you begin writing a formal EIP, you should vet your idea. Ask the Ethereum community first if an idea is original to avoid wasting time on something that will be rejected based on prior research. It is thus recommended to open a discussion thread on <a href="https://ethereum-magicians.org/">the Ethereum Magicians forum</a> to do this.</p>
<p>Once the idea has been vetted, your next responsibility will be to present (by means of an EIP) the idea to the reviewers and all interested parties, invite editors, developers, and the community to give feedback on the aforementioned channels. You should try and gauge whether the interest in your EIP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. For example, the work required for implementing a Core EIP will be much greater than for an ERC and the EIP will need sufficient interest from the Ethereum client teams. Negative community feedback will be taken into consideration and may prevent your EIP from moving past the Draft stage.</p>
<h3 id="core-eips">
<a href="#core-eips" class="anchor-link"></a> Core EIPs
</h3>
<p>For Core EIPs, given that they require client implementations to be considered <strong>Final</strong> (see “EIPs Process” below), you will need to either provide an implementation for clients or convince clients to implement your EIP.</p>
<p>The best way to get client implementers to review your EIP is to present it on an AllCoreDevs call. You can request to do so by posting a comment linking your EIP on an <a href="https://github.com/ethereum/pm/issues">AllCoreDevs agenda GitHub Issue</a>.</p>
<p>The AllCoreDevs call serves as a way for client implementers to do three things. First, to discuss the technical merits of EIPs. Second, to gauge what other clients will be implementing. Third, to coordinate EIP implementation for network upgrades.</p>
<p>These calls generally result in a “rough consensus” around what EIPs should be implemented. This “rough consensus” rests on the assumptions that EIPs are not contentious enough to cause a network split and that they are technically sound.</p>
<p>:warning: The EIPs process and AllCoreDevs call were not designed to address contentious non-technical issues, but, due to the lack of other ways to address these, often end up entangled in them. This puts the burden on client implementers to try and gauge community sentiment, which hinders the technical coordination function of EIPs and AllCoreDevs calls. If you are shepherding an EIP, you can make the process of building community consensus easier by making sure that <a href="https://ethereum-magicians.org/">the Ethereum Magicians forum</a> thread for your EIP includes or links to as much of the community discussion as possible and that various stakeholders are well-represented.</p>
<p><em>In short, your role as the champion is to write the EIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea.</em></p>
<h3 id="eip-process">
<a href="#eip-process" class="anchor-link"></a> EIP Process
</h3>
<p>The following is the standardization process for all EIPs in all tracks:</p>
<p><img src="/assets/eip-1/EIP-process-update.jpg" alt="EIP Status Diagram"></p>
<p><strong>Idea</strong> - An idea that is pre-draft. This is not tracked within the EIP Repository.</p>
<p><strong>Draft</strong> - The first formally tracked stage of an EIP in development. An EIP is merged by an EIP Editor into the EIP repository when properly formatted.</p>
<p><strong>Review</strong> - An EIP Author marks an EIP as ready for and requesting Peer Review.</p>
<p><strong>Last Call</strong> - This is the final review window for an EIP before moving to <code class="language-plaintext highlighter-rouge">Final</code>. An EIP editor will assign <code class="language-plaintext highlighter-rouge">Last Call</code> status and set a review end date (<code class="language-plaintext highlighter-rouge">last-call-deadline</code>), typically 14 days later.</p>
<p>If this period results in necessary normative changes it will revert the EIP to <code class="language-plaintext highlighter-rouge">Review</code>.</p>
<p><strong>Final</strong> - This EIP represents the final standard. A Final EIP exists in a state of finality and should only be updated to correct errata and add non-normative clarifications.</p>
<p><strong>Stagnant</strong> - Any EIP in <code class="language-plaintext highlighter-rouge">Draft</code> or <code class="language-plaintext highlighter-rouge">Review</code> or <code class="language-plaintext highlighter-rouge">Last Call</code> if inactive for a period of 6 months or greater is moved to <code class="language-plaintext highlighter-rouge">Stagnant</code>. An EIP may be resurrected from this state by Authors or EIP Editors through moving it back to <code class="language-plaintext highlighter-rouge">Draft</code> or it’s earlier status. If not resurrected, a proposal may stay forever in this status.</p>
<blockquote>
<p><em>EIP Authors are notified of any algorithmic change to the status of their EIP</em></p>
</blockquote>
<p><strong>Withdrawn</strong> - The EIP Author(s) have withdrawn the proposed EIP. This state has finality and can no longer be resurrected using this EIP number. If the idea is pursued at later date it is considered a new proposal.</p>
<p><strong>Living</strong> - A special status for EIPs that are designed to be continually updated and not reach a state of finality. This includes most notably EIP-1.</p>
<h2 id="what-belongs-in-a-successful-eip">
<a href="#what-belongs-in-a-successful-eip" class="anchor-link"></a> What belongs in a successful EIP?
</h2>
<p>Each EIP should have the following parts:</p>
<ul>
<li>Preamble - RFC 822 style headers containing metadata about the EIP, including the EIP number, a short descriptive title (limited to a maximum of 44 characters), a description (limited to a maximum of 140 characters), and the author details. Irrespective of the category, the title and description should not include EIP number. See <a href="/EIPS/eip-1#eip-header-preamble">below</a> for details.</li>
<li>Abstract - Abstract is a multi-sentence (short paragraph) technical summary. This should be a very terse and human-readable version of the specification section. Someone should be able to read only the abstract to get the gist of what this specification does.</li>
<li>Motivation (*optional) - A motivation section is critical for EIPs that want to change the Ethereum protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the EIP solves. EIP submissions without sufficient motivation may be rejected outright.</li>
<li>Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current Ethereum platforms (cpp-ethereum, go-ethereum, parity, ethereumJ, ethereumjs-lib, <a href="https://github.com/ethereum/wiki/wiki/Clients">and others</a>.</li>
<li>Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.</li>
<li>Backwards Compatibility - All EIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The EIP must explain how the author proposes to deal with these incompatibilities. EIP submissions without a sufficient backwards compatibility treatise may be rejected outright.</li>
<li>Test Cases - Test cases for an implementation are mandatory for EIPs that are affecting consensus changes. Tests should either be inlined in the EIP as data (such as input/expected output pairs, or included in <code class="language-plaintext highlighter-rouge">../assets/eip-###/&lt;filename&gt;</code>.</li>
<li>Reference Implementation - An optional section that contains a reference/example implementation that people can use to assist in understanding or implementing this specification.</li>
<li>Security Considerations - All EIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life-cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. EIP submissions missing the “Security Considerations” section will be rejected. An EIP cannot proceed to status “Final” without a Security Considerations discussion deemed sufficient by the reviewers.</li>
<li>Copyright Waiver - All EIPs must be in the public domain. See the bottom of this EIP for an example copyright waiver.</li>
</ul>
<h2 id="eip-formats-and-templates">
<a href="#eip-formats-and-templates" class="anchor-link"></a> EIP Formats and Templates
</h2>
<p>EIPs should be written in <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">markdown</a> format. There is a <a href="https://github.com/ethereum/EIPs/blob/master/eip-template.md">template</a> to follow.</p>
<h2 id="eip-header-preamble">
<a href="#eip-header-preamble" class="anchor-link"></a> EIP Header Preamble
</h2>
<p>Each EIP must begin with an <a href="https://www.ietf.org/rfc/rfc822.txt">RFC 822</a> style header preamble, preceded and followed by three hyphens (<code class="language-plaintext highlighter-rouge">---</code>). This header is also termed <a href="https://jekyllrb.com/docs/front-matter/">“front matter” by Jekyll</a>. The headers must appear in the following order.</p>
<p><code class="language-plaintext highlighter-rouge">eip</code>: <em>EIP number</em> (this is determined by the EIP editor)</p>
<p><code class="language-plaintext highlighter-rouge">title</code>: <em>The EIP title is a few words, not a complete sentence</em></p>
<p><code class="language-plaintext highlighter-rouge">description</code>: <em>Description is one full (short) sentence</em></p>
<p><code class="language-plaintext highlighter-rouge">author</code>: <em>The list of the author’s or authors’ name(s) and/or username(s), or name(s) and email(s). Details are below.</em></p>
<p><code class="language-plaintext highlighter-rouge">discussions-to</code>: <em>The url pointing to the official discussion thread</em></p>
<p><code class="language-plaintext highlighter-rouge">status</code>: <em>Draft, Review, Last Call, Final, Stagnant, Withdrawn, Living</em></p>
<p><code class="language-plaintext highlighter-rouge">last-call-deadline</code>: <em>The date last call period ends on</em> (Optional field, only needed when status is <code class="language-plaintext highlighter-rouge">Last Call</code>)</p>
<p><code class="language-plaintext highlighter-rouge">type</code>: <em>One of <code class="language-plaintext highlighter-rouge">Standards Track</code>, <code class="language-plaintext highlighter-rouge">Meta</code>, or <code class="language-plaintext highlighter-rouge">Informational</code></em></p>
<p><code class="language-plaintext highlighter-rouge">category</code>: <em>One of <code class="language-plaintext highlighter-rouge">Core</code>, <code class="language-plaintext highlighter-rouge">Networking</code>, <code class="language-plaintext highlighter-rouge">Interface</code>, or <code class="language-plaintext highlighter-rouge">ERC</code></em> (Optional field, only needed for <code class="language-plaintext highlighter-rouge">Standards Track</code> EIPs)</p>
<p><code class="language-plaintext highlighter-rouge">created</code>: <em>Date the EIP was created on</em></p>
<p><code class="language-plaintext highlighter-rouge">requires</code>: <em>EIP number(s)</em> (Optional field)</p>
<p><code class="language-plaintext highlighter-rouge">withdrawal-reason</code>: <em>A sentence explaining why the EIP was withdrawn.</em> (Optional field, only needed when status is <code class="language-plaintext highlighter-rouge">Withdrawn</code>)</p>
<p>Headers that permit lists must separate elements with commas.</p>
<p>Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).</p>
<h4 id="author-header">
<a href="#author-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">author</code> header
</h4>
<p>The <code class="language-plaintext highlighter-rouge">author</code> header lists the names, email addresses or usernames of the authors/owners of the EIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the <code class="language-plaintext highlighter-rouge">author</code> header value must be:</p>
<blockquote>
<p>Random J. User &lt;address@dom.ain&gt;</p>
</blockquote>
<p>or</p>
<blockquote>
<p>Random J. User (@username)</p>
</blockquote>
<p>if the email address or GitHub username is included, and</p>
<blockquote>
<p>Random J. User</p>
</blockquote>
<p>if the email address is not given.</p>
<p>It is not possible to use both an email and a GitHub username at the same time. If important to include both, one could include their name twice, once with the GitHub username, and once with the email.</p>
<p>At least one author must use a GitHub username, in order to get notified on change requests and have the capability to approve or reject them.</p>
<h4 id="discussions-to-header">
<a href="#discussions-to-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">discussions-to</code> header
</h4>
<p>While an EIP is a draft, a <code class="language-plaintext highlighter-rouge">discussions-to</code> header will indicate the URL where the EIP is being discussed.</p>
<p>The preferred discussion URL is a topic on <a href="https://ethereum-magicians.org/">Ethereum Magicians</a>. The URL cannot point to Github pull requests, any URL which is ephemeral, and any URL which can get locked over time (i.e. Reddit topics).</p>
<h4 id="type-header">
<a href="#type-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">type</code> header
</h4>
<p>The <code class="language-plaintext highlighter-rouge">type</code> header specifies the type of EIP: Standards Track, Meta, or Informational. If the track is Standards please include the subcategory (core, networking, interface, or ERC).</p>
<h4 id="category-header">
<a href="#category-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">category</code> header
</h4>
<p>The <code class="language-plaintext highlighter-rouge">category</code> header specifies the EIP’s category. This is required for standards-track EIPs only.</p>
<h4 id="created-header">
<a href="#created-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">created</code> header
</h4>
<p>The <code class="language-plaintext highlighter-rouge">created</code> header records the date that the EIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.</p>
<h4 id="requires-header">
<a href="#requires-header" class="anchor-link"></a> <code class="language-plaintext highlighter-rouge">requires</code> header
</h4>
<p>EIPs may have a <code class="language-plaintext highlighter-rouge">requires</code> header, indicating the EIP numbers that this EIP depends on.</p>
<h2 id="linking-to-other-eips">
<a href="#linking-to-other-eips" class="anchor-link"></a> Linking to other EIPs
</h2>
<p>References to other EIPs should follow the format <code class="language-plaintext highlighter-rouge">EIP-N</code> where <code class="language-plaintext highlighter-rouge">N</code> is the EIP number you are referring to. Each EIP that is referenced in an EIP <strong>MUST</strong> be accompanied by a relative markdown link the first time it is referenced, and <strong>MAY</strong> be accompanied by a link on subsequent references. The link <strong>MUST</strong> always be done via relative paths so that the links work in this GitHub repository, forks of this repository, the main EIPs site, mirrors of the main EIP site, etc. For example, you would link to this EIP with <code class="language-plaintext highlighter-rouge">[EIP-1](/EIPS/eip-1)</code>.</p>
<h2 id="auxiliary-files">
<a href="#auxiliary-files" class="anchor-link"></a> Auxiliary Files
</h2>
<p>Images, diagrams and auxiliary files should be included in a subdirectory of the <code class="language-plaintext highlighter-rouge">assets</code> folder for that EIP as follows: <code class="language-plaintext highlighter-rouge">assets/eip-N</code> (where <strong>N</strong> is to be replaced with the EIP number). When linking to an image in the EIP, use relative links such as <code class="language-plaintext highlighter-rouge">../assets/eip-1/image.png</code>.</p>
<h2 id="transferring-eip-ownership">
<a href="#transferring-eip-ownership" class="anchor-link"></a> Transferring EIP Ownership
</h2>
<p>It occasionally becomes necessary to transfer ownership of EIPs to a new champion. In general, we’d like to retain the original author as a co-author of the transferred EIP, but that’s really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the EIP process, or has fallen off the face of the ‘net (i.e. is unreachable or isn’t responding to email). A bad reason to transfer ownership is because you don’t agree with the direction of the EIP. We try to build consensus around an EIP, but if that’s not possible, you can always submit a competing EIP.</p>
<p>If you are interested in assuming ownership of an EIP, send a message asking to take over, addressed to both the original author and the EIP editor. If the original author doesn’t respond to the email in a timely manner, the EIP editor will make a unilateral decision (it’s not like such decisions can’t be reversed :)).</p>
<h2 id="eip-editors">
<a href="#eip-editors" class="anchor-link"></a> EIP Editors
</h2>
<p>The current EIP editors are</p>
<ul>
<li>Alex Beregszaszi (@axic)</li>
<li>Matt Garnett (@lightclient)</li>
<li>Micah Zoltu (@MicahZoltu)</li>
<li>Greg Colvin (@gcolvin)</li>
</ul>
<p>Emeritus EIP editors are</p>
<ul>
<li>Casey Detrio (@cdetrio)</li>
<li>Nick Johnson (@arachnid)</li>
<li>Vitalik Buterin (@vbuterin)</li>
<li>Hudson Jameson (@Souptacular)</li>
<li>Nick Savers (@nicksavers)</li>
<li>Martin Becze (@wanderer)</li>
</ul>
<h2 id="eip-editor-responsibilities">
<a href="#eip-editor-responsibilities" class="anchor-link"></a> EIP Editor Responsibilities
</h2>
<p>For each new EIP that comes in, an editor does the following:</p>
<ul>
<li>Read the EIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don’t seem likely to get to final status.</li>
<li>The title should accurately describe the content.</li>
<li>Check the EIP for language (spelling, grammar, sentence structure, etc.), markup (GitHub flavored Markdown), code style</li>
</ul>
<p>If the EIP isn’t ready, the editor will send it back to the author for revision, with specific instructions.</p>
<p>Once the EIP is ready for the repository, the EIP editor will:</p>
<ul>
<li>
<p>Assign an EIP number (generally the PR number, but the decision is with the editors)</p>
</li>
<li>
<p>Merge the corresponding <a href="https://github.com/ethereum/EIPs/pulls">pull request</a></p>
</li>
<li>
<p>Send a message back to the EIP author with the next step.</p>
</li>
</ul>
<p>Many EIPs are written and maintained by developers with write access to the Ethereum codebase. The EIP editors monitor EIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.</p>
<p>The editors don’t pass judgment on EIPs. We merely do the administrative &amp; editorial part.</p>
<h2 id="style-guide">
<a href="#style-guide" class="anchor-link"></a> Style Guide
</h2>
<h3 id="eip-numbers">
<a href="#eip-numbers" class="anchor-link"></a> EIP numbers
</h3>
<p>When referring to an EIP by number, it should be written in the hyphenated form <code class="language-plaintext highlighter-rouge">EIP-X</code> where <code class="language-plaintext highlighter-rouge">X</code> is the EIP’s assigned number.</p>
<h3 id="rfc-2119">
<a href="#rfc-2119" class="anchor-link"></a> RFC 2119
</h3>
<p>EIPs are encouraged to follow <a href="https://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a> for terminology and to insert the following at the beginning of the Specification section:</p>
<blockquote>
<p>The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.</p>
</blockquote>
<h2 id="history">
<a href="#history" class="anchor-link"></a> History
</h2>
<p>This document was derived heavily from <a href="https://github.com/bitcoin/bips">Bitcoin’s BIP-0001</a> written by Amir Taaki which in turn was derived from <a href="https://www.python.org/dev/peps/">Python’s PEP-0001</a>. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use in the Ethereum Improvement Process, and should not be bothered with technical questions specific to Ethereum or the EIP. Please direct all comments to the EIP editors.</p>
<h2 id="copyright">
<a href="#copyright" class="anchor-link"></a> Copyright
</h2>
<p>Copyright and related rights waived via <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>.</p>
<h2>Citation</h2>
<p>Please cite this document as:</p>
<p><a href="mailto:mb@ethereum.org">Martin Becze</a>, <a href="mailto:hudson@ethereum.org">Hudson Jameson</a>, et al., "EIP-1: EIP Purpose and Guidelines," <em>Ethereum Improvement Proposals</em>, no. 1, October 2015. [Online serial]. Available: https://eips.ethereum.org/EIPS/eip-1.</p>
</div>
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "TechArticle",
    "headline": "EIP-1: EIP Purpose and Guidelines",
    "author": "Martin Becze <mb@ethereum.org>, Hudson Jameson <hudson@ethereum.org>, et al.",
    "name": "EIP-1: EIP Purpose and Guidelines",
    "dateCreated": "2015-10-27",
    "datePublished": "2015-10-27",
    
    "inLanguage": "en-US",
    "license": "#copyright",
    "copyrightYear": "2015"
  }
</script>
