const version = "2.0.3"

//Smooth scroll
// document.write(`<script src="https://gcore.jsdelivr.net/gh/idiotWu/smooth-scrollbar@develop/dist/smooth-scrollbar.js"></script>`);
// document.write(`<script src="https://gcore.jsdelivr.net/gh/idiotWu/smooth-scrollbar@develop/dist/plugins/overscroll.js"></script>`);

document.write(`<link rel="icon" type="image/x-icon" href="https://gcore.jsdelivr.net/gh/RyanL-29/aniopen/favicon.ico">`)
document.write('<link rel="stylesheet" href="https://npm.elemecdn.com/mdui@1.0.2/dist/css/mdui.min.css" />'),
document.write('<script src="https://npm.elemecdn.com/mdui@1.0.2/dist/js/mdui.min.js"><\/script>'),
document.write('<link rel="stylesheet" href="https://gcore.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css">');
document.write(`<link rel="manifest" href="https://gcore.jsdelivr.net/gh/RyanL-29/aniopen@${version}/manifest.json">`);
document.write('<link rel="apple-touch-icon" href="https://gcore.jsdelivr.net/gh/RyanL-29/aniopen/pwa_icon/192x192nt.png">');
document.write('<script src="https://gcore.jsdelivr.net/npm/instant.page@5.1.0/instantpage.js" type="module"></script>');
// markdown支持
document.write('<script src="https://gcore.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js"></script>');
// DPlayer API
document.write(`<script src="https://gcore.jsdelivr.net/gh/RyanL-29/aniopen@${version}/DPlayer.min.js"></script>`);
document.write('<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>');

// Cloudflare underscore function
document.write(`<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>`);


// 初始化页面，并载入必要资源
function init() {
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue mdui-color-grey-800");
    var html = `
    <style>
    /* Tooltip text */
    .tool_tip {
        visibility: hidden;
        position: absolute;
        width: auto;
        height: auto;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 3px 5px 3px 5px;
        border-radius: 4px;
        z-index: 1;
        opacity: 0;
        transition: opacity .3s;
        font-size:0.8em;
        line-height: 1pc;
    }
    .tool_tip {
        top: 80%;
        left: 0%;
    }
    /* Show the tooltip text when you mouse over the tooltip container */
    .mdui-list-item:hover .tool_tip {
    visibility: visible;
    opacity: 1;
    }

    .mdui-list-item{
        overflow:visible;
    }
    /* Subtitle */
    .dplayer-subtitle {
        display: inline-block;
        white-space: pre-wrap;
        color: #fff!important;
        font-weight: bold!important;
        text-shadow: -1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000,-1px -1px 0 #000!important;
    }
    .dplayer-video-wrap {
        font-size: 150%;
    }
    @media only screen and (max-device-width: 1020px) {
        .dplayer-subtitle{
            font-size: 4vw!important
        }
    }
    
    @media only screen and (max-device-width: 800px) {
        .dplayer-subtitle{
            font-size: 5vw!important
        }
    }

    html {
        background-color: #424242!important;
    }

    /* Scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #FBFBFB; 
    }

    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 56px;
    }

    // .scrollbar-track {
    //     background: transparent;
    //     width: 5px;
    //     border-radius: 10px;
    //     margin-top: 56px;
    // }

    // .scrollbar-thumb {
    //     background: grey;
    //     border-radius: 10px;
    // }


    </style>
<header class="mdui-appbar mdui-color-grey-900 mdui-theme-layout-dark"> 
   <div id="nav" class="mdui-toolbar mdui-container">
   
   </div>
</header>
<div id="content" class="mdui-container"> 
</div>
  <footer>
    <p style="line-height: 0;">Project ANi</p>
    <div style="line-height: 0;">
    <p class="footer-ele"><a onclick="topFunction(); contactus();">聯絡我們</a></p><ins></ins>
    <p class="footer-ele"><a onclick="topFunction(); dmca();">DMCA</a></p>
    </div>
    <p class="footer-ele2">本網站只用作交流學習以及試看</p>
    <p class="footer-ele2">如發現網站有任何非法資源 請立即聯絡我們移除</p>
    </footer>`;
    $('body').html(html);
}

function render(path) {
    if (path.indexOf("?") > 0) {
        path = path.substr(0, path.indexOf("?"));
    }
    nav(path);
    if (path.substr(-1) == '/') {
        list(path);
    } else {
        file(path);
    }
}

var timeout2 = null;

function timeout() {
    document.getElementById("list").innerHTML = '<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>';
    var delay = 1500;
    if (timeout2) {
        clearTimeout(timeout2);
    }
    timeout2 = setTimeout(function () {
        globalsearch();
    }, delay);
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function globalsearch() {
    var path = window.location.pathname;
    var input, filter;
    input = document.getElementById("searchinput");
    filter = input.value;
    $.post(path, '{"inputvalue":"' + filter + '"}', function (data, status) {
        var obj = jQuery.parseJSON(data);
        if (typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401') {
            var pass = prompt("Require a private token", "");
            localStorage.setItem('password' + path, pass);
            if (pass != null && pass != "") {
                list(path);
            } else {
                history.go(-1);
            }
        } else if (typeof obj != 'null') {
            list_files(obj.foldername, obj.files);
        }
    })
}

// 渲染 DMCA
function dmca() {
    nav("/DMCA");
    window.history.pushState('DMCA', 'Open ANi', '/DMCA');
    var content = `
    <h1>網站聲明</h1>
    <p>本網站是以轉載資源的方式運作，對所有資源的真實性、完整性及立場等，不負任何法律責任。本網站亦不承擔使用者將本網站資源用於盈利和/或非法目的之任何後果和/或法律責任。
    本網站資源皆從網上搜集轉載，不承擔任何技術及版權問題。
    下載鏈接僅供寬帶測試研究用途,請下載後在24小時內刪除,請勿用於商業目的。</p>
    <hr/>
    <h1>DMCA policy</h1>
    <p>This Digital Millennium Copyright Act policy (&quot;Policy&quot;) applies to the <a target="_blank" rel="nofollow" href="https://open.ani.rip">open.ani.rip</a> website (&quot;Website&quot;), &quot;Open ANi&quot; mobile application (&quot;Mobile Application&quot;) and any of their related products and services (collectively, &quot;Services&quot;) and outlines how this Website operator and Mobile Application developer (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) addresses copyright infringement notifications and how you (&quot;you&quot; or &quot;your&quot;) may submit a copyright infringement complaint.</p>
    <p>Protection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (&quot;DMCA&quot;) of 1998, the text of which can be found at the U.S. Copyright Office <a target="_blank" href="https://www.copyright.gov" rel="noopener">website</a>.</p>
    <h2>What to consider before submitting a copyright complaint</h2>
    <p>Before submitting a copyright complaint to us, consider whether the use could be considered fair use. Fair use states that brief excerpts of copyrighted material may, under certain circumstances, be quoted verbatim for purposes such as criticism, news reporting, teaching, and research, without the need for permission from or payment to the copyright holder. If you have considered fair use, and you still wish to continue with a copyright complaint, you may want to first reach out to the user in question to see if you can resolve the matter directly with the user.</p>
    <p>Please note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.</p>
    <p>The DMCA requires you to provide your personal information in the copyright infringement notification. If you are concerned about the privacy of your personal information, you may wish to <a target="_blank" href="https://www.copyrighted.com/professional-takedowns" rel="noopener">hire an agent</a> to report infringing material for you.</p>
    <h2>Notifications of infringement</h2>
    <p>Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. Our response may include the removal or restriction of access to allegedly infringing material as well as a permanent termination of repeat infringers’ accounts.</p>
    <p>If we remove or restrict access to materials or terminate an account in response to a Notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access.</p>
    <h2>Changes and amendments</h2>
    <p>We reserve the right to modify this Policy or its terms relating to the Services at any time, effective upon posting of an updated version of this Policy on the Services. When we do, we will revise the updated date at the bottom of this page.</p>
    <h2>Reporting copyright infringement</h2>
    <p>If you would like to notify us of the infringing material or activity, you may send an email to su&#112;port&#64;ani&#46;&#114;&#105;p.</p>
    <p>This document was last updated on May 23, 2021</p>
	`;
    $('#content').html(content);
}

// 渲染 Contact Us
function contactus() {
    window.history.pushState('Contact Us', 'Open ANi', '/ContactUs');
    nav("/ContactUs");
    var content = `
    <h1>聯絡我們</h1>
    <p>Email: <a style="color:#E48E00;" href = "mailto: support@ani.rip?subject = Feedback">support@ani.rip</a></p>
    <p>Discord: <a style="color:#E48E00;" href = "https://ani.rip/discord">https://ani.rip/discord</a></p>
	`;
    $('#content').html(content);
}

// 渲染导航栏
function nav(path) {
    var html = "";
    html += `<div style="max-width:150px;"><img class="mdui-typo-headline mdui-img-fluid folder" href="/"  style = "max-width: 100%;height: auto;width: auto;"src="https://gcore.jsdelivr.net/gh/RyanL-29/aniopen/aniopen.png"></div>`;
    var arr = path.trim('/').split('/');
    let p = "/"
    if (arr.length > 0) {
        for (i in arr) {
            var n = arr[i];
            if (n == "DMCA" || n == "ContactUs") {
                p += "";
            }
            else {
                n = decodeURIComponent(n);
                p += n + '/';
            }
            if (n == '') {
                break;
            }
            html += `<style>@media only screen and (max-width: 615px){.pathlist{display:none;}}</style><i class="mdui-icon material-icons mdui-icon-dark folder pathlist" style="margin:0;">chevron_right</i><a class="folder pathlist">${n}</a>`;
        }
        if (!window.location.href.includes("?a=view") && path != '/DMCA' && path != '/ContactUs') {
            if (screen.width >= 570)
                html += `<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><i style="bottom: 0px;" class="mdui-icon material-icons">search</i><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋"/></div>`
            else
                html += `<div class="mdui-toolbar-spacer"></div>`
        }
        else {
            html += `<div class="mdui-toolbar-spacer"></div>`
        }
        html += `<a href="https://t.me/channel_ani" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: 'Telegram'}">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="100%" height="100%" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="white"/></svg>
                    </svg>
                </a>
                <a href="https://ko-fi.com/anidonate" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: 'Donate'}">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="90%" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 503.467 503.467" style="enable-background:new 0 0 503.467 503.467;" xml:space="preserve">
                    <g transform="translate(1 1)">
                        <path style="fill:#AAB1BA;" d="M3.33,498.2V276.333h51.2c9.387,0,17.067,7.68,17.067,17.067v17.067v119.467v51.2
                            c0,9.387-7.68,17.067-17.067,17.067H3.33z"/>
                        <path style="fill:#FF7474;" d="M332.716,31.427c15.36-17.067,38.4-28.16,63.147-28.16c46.933,0,85.333,38.4,85.333,85.333
                            c0,51.2-51.2,136.533-145.067,187.733C242.263,225.133,191.063,139.8,191.063,88.6c0-46.933,38.4-85.333,85.333-85.333
                            c11.947,0,23.893,2.56,34.133,6.827c0,0,15.36,8.533,21.333,19.627L332.716,31.427z"/>
                        <path style="fill:#FFD0A1;" d="M354.05,399.213c2.56-0.853,5.12-1.707,7.68-3.413l98.133-47.787
                            c11.947-6.827,28.16-2.56,34.987,9.387c6.827,11.947,2.56,28.16-9.387,34.987l-115.2,71.68c0,0-25.6,17.067-85.333,17.067
                            c-51.2,0-128-42.667-128-42.667s-17.067-8.533-51.2-8.533H71.596V310.467h102.4c25.6,0,68.267,51.2,93.867,51.2h51.2
                            c17.067,0,25.6,8.533,25.6,8.533s8.533,8.533,8.533,25.6L354.05,399.213z"/>
                    </g>
                    <path style="fill:#51565F;" d="M55.53,503.467H4.33c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h51.2
                        c6.827,0,12.8-5.973,12.8-12.8V294.4c0-6.827-5.973-12.8-12.8-12.8H4.33c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267
                        h51.2c11.947,0,21.333,9.387,21.333,21.333v187.733C76.863,494.08,67.476,503.467,55.53,503.467z M285.93,486.4
                        c-52.053,0-127.147-41.813-129.707-43.52l0,0c0,0-17.067-7.68-49.493-7.68c-2.56,0-4.267-1.707-4.267-4.267
                        c0-2.56,1.707-4.267,4.267-4.267c34.987,0,52.053,8.533,52.907,9.387c0.853,0.853,76.8,41.813,126.293,41.813
                        c57.173,0,82.773-16.213,82.773-16.213l115.2-71.68c10.24-5.973,13.653-18.773,7.68-29.013c-5.973-10.24-18.773-13.653-29.013-7.68
                        l-98.133,47.787c-17.92,9.387-34.987,9.387-69.973,9.387c-34.133,0-83.627-8.533-86.187-8.533s-4.267-2.56-3.413-5.12
                        c0-2.56,2.56-4.267,5.12-3.413c0.853,0,51.2,8.533,84.48,8.533s50.347,0,66.56-7.68l98.133-47.787
                        c13.653-7.68,32.427-3.413,40.107,11.093c8.533,14.507,3.413,32.427-11.093,40.96l-115.2,71.68
                        C372.116,469.333,346.516,486.4,285.93,486.4z M25.663,460.8c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533
                        s8.533,3.413,8.533,8.533S30.783,460.8,25.663,460.8z M345.663,375.467c-0.853,0-2.56,0-3.413-0.853l0,0c0,0-7.68-7.68-22.187-7.68
                        h-51.2c-14.507,0-31.573-12.8-49.493-26.453c-16.213-11.947-33.28-24.747-44.373-24.747H106.73c-2.56,0-4.267-1.707-4.267-4.267
                        c0-2.56,1.707-4.267,4.267-4.267h68.267c14.507,0,31.573,12.8,49.493,26.453c16.213,11.947,33.28,24.747,44.373,24.747h51.2
                        c18.773,0,28.16,9.387,29.013,9.387c1.707,1.707,1.707,4.267,0,5.973C348.223,375.467,346.516,375.467,345.663,375.467z
                            M337.13,281.6c-0.853,0-1.707,0-1.707-0.853C243.263,230.4,187.796,144.213,187.796,89.6c0-49.493,40.107-89.6,89.6-89.6
                        c12.8,0,24.747,2.56,35.84,7.68c2.56,0.853,3.413,3.413,2.56,5.973c-0.853,2.56-3.413,3.413-5.973,2.56
                        c-10.24-4.267-21.333-6.827-32.427-6.827c-44.373,0-81.067,36.693-81.067,81.067c0,52.053,52.907,133.973,140.8,182.613
                        c87.893-48.64,140.8-131.413,140.8-182.613c0-44.373-36.693-81.067-81.067-81.067c-31.573,0-60.587,18.773-73.387,46.933
                        c-0.853,2.56-3.413,3.413-5.973,1.707c-2.56-0.853-3.413-3.413-1.707-5.973C330.303,20.48,362.73,0,396.863,0
                        c49.493,0,89.6,40.107,89.6,89.6c0,54.613-55.467,140.8-147.627,191.147C338.836,281.6,337.983,281.6,337.13,281.6z M445.503,76.8
                        c-1.707,0-3.413-0.853-4.267-2.56c-5.12-13.653-15.36-23.893-28.16-28.16c-2.56-0.853-3.413-3.413-2.56-5.12
                        c0.853-2.56,3.413-3.413,5.12-2.56c16.213,5.973,28.16,17.92,34.133,34.133c0.853,2.56,0,4.267-2.56,5.12
                        C446.356,76.8,445.503,76.8,445.503,76.8z"/>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
                </a>`;
    }
    $('#nav').html(html);
}

// 渲染文件列表
function list(path) {
    var searchbar = "";
    if (!window.location.href.includes("?a=view") && path != '/DMCA' && path != '/ContactUs') {
        if (screen.width < 570)
            searchbar += `<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋"/></div>`
    }
    else {
        searchbar += `<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋" disabled/></div>`
    }
    var content = `
    ${searchbar}
	<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>
	 <div class="mdui-row">
	  <ul class="mdui-list"> 
	   <li class="mdui-list-item th"> 
	    <div class="mdui-col-xs-12 mdui-col-sm-7" onclick="sortFileList('sortname')">
	     文件
	<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>
	    </div> 
	    <div class="mdui-col-sm-3 mdui-text-right" onclick="sortFileList('sortdate')">
	     更新時間
	<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>
	    </div> 
	    <div class="mdui-col-sm-2 mdui-text-right" onclick="sortFileList('sortsize')">
	     檔案大小
	<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>
	    </div>
        <div class="mdui-col-sm-2 mdui-text-right">
       </div>
	    </li> 
	  </ul> 
	 </div> 
	 <div class="mdui-row"> 
	  <ul id="list" class="mdui-list"> 
	  </ul> 
	 </div>
	 <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>
	`;
    $('#content').html(content);

    var password = localStorage.getItem('password' + path);
    $('#list').html(`<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>`);
    $('#readme_md').hide().html('');
    $('#head_md').hide().html('');
    $.post(path, '{"password":"' + password + '"}', function (data, status) {
        var obj = jQuery.parseJSON(data);
        if (typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401') {
            var pass = prompt("Require a private token", "");
            localStorage.setItem('password' + path, pass);
            if (pass != null && pass != "") {
                list(path);
            } else {
                history.go(-1);
            }
        } else if (typeof obj != 'null') {
            list_files(path, obj.files);
        }
    });
}

function list_files(path, files) {
    html = "";
    for (i in files) {
        var item = files[i];
        if (Array.isArray(path)) {
            var p = path[i] + item.name;
        }
        else {
            var p = path + item.name;
        }
        pProg = p.split('/')
        pProg.forEach((ps, index) => {
            ps = decodeURIComponent(ps)
            pProg[index] = encodeURIComponent(ps)
        })
        if (item['size'] == undefined) {
            item['size'] = "";
        }
        item['createdTime'] = utc2HK(item['createdTime']);
        item['size'] = formatFileSize(item['size']);
        if (item['mimeType'] == 'application/vnd.google-apps.folder') {
            p = pProg.join('/') + '/'
            html += `<li class="mdui-list-item mdui-ripple"><span class="tool_tip">${item.name}</span><a href="${p}" class="folder">
	            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">
	            <i class="mdui-icon material-icons">folder_open</i>
	              ${item.name}
	            </div>
	            <div class="mdui-col-sm-3 mdui-text-right sortdate">${item['createdTime']}</div>
	            <div class="mdui-col-sm-2 mdui-text-right sortsize">${item['size']}</div>
                <div class="mdui-col-sm-2 mdui-text-right"><a class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"></a></div>
	            </a>
	        </li>`;
        } else {
            p = pProg.join('/')
            var k = p;
            var c = "file";
            if (item.name == "README.md") {
                get_file(p, item, function (data) {
                    markdown("#readme_md", data);
                });
            }
            if (item.name == "HEAD.md") {
                get_file(p, item, function (data) {
                    markdown("#head_md", data);
                });
            }
            var ext = p.split('.').pop();
            if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext.toLowerCase()}|`) >= 0) {
                p += "?a=view";
                c += " view";
            }
            if (item.name == "sw.js" || item.name.includes(".vtt") || item.name.includes(".srt")) {

            }
            else {
                if ("|html|php|css|go|java|js|json|txt|sh|md|bmp|jpg|jpeg|png|gif|m4a|mp3|wav|ogg|".indexOf(`|${ext.toLowerCase()}|`) >= 0) {
                    html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}" class="${c}"><span class="tool_tip">${item.name}</span>
                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">
                    <i class="mdui-icon material-icons">insert_drive_file</i>
                      ${item.name}
                    </div>
                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${item['createdTime']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${item['size']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${k}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>
                    </a>
                </li>`;
                }
                else if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
                    html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}" class="${c}"><span class="tool_tip">${item.name}</span>
                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">
                    <i class="mdui-icon material-icons">video_library</i>
                      ${item.name}
                    </div>
                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${item['createdTime']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${item['size']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${k}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>
                    </a>
                </li>`;
                }
                else if ("|nfo|".indexOf(`|${ext}|`) >= 0) {

                }
                else {
                    html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}" class="${c}"><span class="tool_tip">${item.name}</span>
                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">
                    <i class="mdui-icon material-icons">insert_drive_file</i>
                      ${item.name}
                    </div>
                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${item['createdTime']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${item['size']}</div>
                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${k}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>
                    </a>
                </li>`;
                }

            }
        }
    }
    $('#list').html(html);
}


function get_file(path, file, callback) {
    var key = "file_path_" + path + file['createdTime'];
    var data = localStorage.getItem(key);
    if (data != undefined) {
        return callback(data);
    } else {
        $.get(path, function (d) {
            localStorage.setItem(key, d);
            callback(d);
        });
    }
}



// 文件展示 ?a=view
function file(path) {
    var dir = path.split('/').slice(0, -1).join('/');;
    var name = path.split('/').pop();
    var encodedPath = dir + '/' + name
    var ext = name.split('.').pop().toLowerCase().replace(`?a=view`, "");
    if ("|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${ext}|`) >= 0) {
        return file_code(encodedPath);
    }

    if ("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0) {
        return file_video(encodedPath);
    }

    if ("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
        return file_video(encodedPath);
    }

    if ("|mp3|wav|ogg|m4a|".indexOf(`|${ext}|`) >= 0) {
        return file_audio(encodedPath);
    }

    if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
        return file_image(encodedPath);
    }
}

// 文件展示 |html|php|css|go|java|js|json|txt|sh|md|
function file_code(path) {
    var type = {
        "html": "html",
        "php": "php",
        "css": "css",
        "go": "golang",
        "java": "java",
        "js": "javascript",
        "json": "json",
        "txt": "Text",
        "sh": "sh",
        "md": "Markdown",
    };
    var name = path.split('/').pop();
    var ext = name.split('.').pop();
    var href = window.location.origin + path;
    var encodedLink = window.location.origin;
    var linkComp = path.split('/');
    for (i = 1; i < linkComp.length; i++) {
        var pathcomp = decodeURIComponent(linkComp[i])
        pathcomp = encodeURIComponent(pathcomp);
        encodedLink = encodedLink + '/' + pathcomp;
    }
    encodedLink = encodedLink.replaceAll(/%25/g, "%");
    let fileName_mobile = ``
    if (screen.width < 570) {
        fileName_mobile = `<p style="overflow-wrap: break-word;">${decodeURIComponent(linkComp.at(-1).replace(/.html|.php|.css|.go|.java|.js|.json|.txt|.sh|.md/g, ""))}</p>`
    }
    var share = encodedLink + "?a=view";
    var content = `
<div class="mdui-container">
<pre id="editor"></pre>
</div>
<br>
${fileName_mobile}
<div class="mdui-textfield">
	<label class="mdui-textfield-label">下載地址</label>
	<input class="mdui-textfield-input" type="text" value="${encodedLink}"/>
</div>
<button href="${share}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>
<button onclick="javascript:location.href='${encodedLink}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>
<script src="https://cdn.staticfile.org/ace/1.4.7/ace.js"></script>
<script src="https://cdn.staticfile.org/ace/1.4.7/ext-language_tools.js"></script>
	`;
    $('#content').html(content);

    $.get(path, function (data) {
        $('#editor').html($('<div/>').text(data).html());
        var code_type = "Text";
        if (type[ext] != undefined) {
            code_type = type[ext];
        }
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/ambiance");
        editor.setFontSize(18);
        editor.session.setMode("ace/mode/" + code_type);

        //Autocompletion
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            maxLines: Infinity
        });
    });
}

// 文件展示 视频 |mp4|webm|avi|
function file_video(path) {
    var safeDecode = function (s) { try { return decodeURIComponent(s); } catch (e) { return s; } };
    var apEscHtml = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
    var linkComp = path.split('/');
    var encodedLink = window.location.origin;
    let fileName_mobile = ""
    if (screen.width < 570) {
        fileName_mobile = `<p id="apFileName" style="overflow-wrap: break-word;">${apEscHtml(safeDecode(linkComp.at(-1) || "").replace(/\.[^.]+$/, ""))}</p>`
    }
    for (var i = 1; i < linkComp.length; i++) {
        var pathcomp = safeDecode(linkComp[i]);
        pathcomp = encodeURIComponent(pathcomp);
        encodedLink = encodedLink + '/' + pathcomp;
    }
    encodedLink = encodedLink.replaceAll(/%25/g, "%");
    var subtitle = encodedLink.replace(/\.[^.\/]+$/, "") + '.vtt';
    var vlc = 'vlc://' + encodedLink;
    var share = encodedLink + "?a=view";
    // 番剧标题（去扩展名/[ANi]/[标签]）
    var rawName = linkComp.at(-1) || "";
    var title = (function (n) {
        var s = safeDecode(n);
        s = s.replace(/\.[^.]+$/, "").replace(/^\s*\[[^\]]*\]\s*/, "").replace(/\[[^\]]*\]/g, " ").replace(/\s+/g, " ").trim();
        return s || n;
    })(rawName);

    var playBtn = `<a href="${vlc}" id="apVlcLink"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i> 在 VLC media player 中播放</button></a>`;
    var content = `
<style>
.aniplayer{ margin:16px 0 8px; }
.aniplayer-stage{ position:relative; border-radius:14px; overflow:hidden; background:#000; box-shadow:0 12px 40px rgba(0,0,0,.5); aspect-ratio:16/9; max-height:82vh; user-select:none; -webkit-user-select:none; }
.aniplayer-stage:fullscreen{ border-radius:0; max-height:none; height:100%; width:100%; aspect-ratio:auto; }
#dplayer{ position:absolute; inset:0; width:100%; height:100%; }
#dplayer .dplayer, #dplayer .dplayer-video-wrap, #dplayer video{ width:100%!important; height:100%!important; }
#dplayer video{ object-fit:contain; background:#000; }
#dplayer .dplayer-controller, #dplayer .dplayer-controller-mask, #dplayer .dplayer-mobile-play, #dplayer .dplayer-bezel, #dplayer .dplayer-notice, #dplayer .dplayer-menu{ display:none!important; }
#dplayer .dplayer-subtitle{ bottom:76px!important; z-index:4; }
.ap-scrim{ position:absolute; left:0; right:0; pointer-events:none; opacity:0; transition:opacity .25s; z-index:5; }
.ap-scrim-top{ top:0; height:110px; background:linear-gradient(180deg,rgba(0,0,0,.6),transparent); }
.ap-scrim-bottom{ bottom:0; height:150px; background:linear-gradient(0deg,rgba(0,0,0,.78),transparent); }
.aniplayer-stage.ap-active .ap-scrim{ opacity:1; }
.ap-top{ position:absolute; top:0; left:0; right:0; z-index:12; display:flex; align-items:center; gap:12px; padding:14px 16px; opacity:0; transform:translateY(-6px); transition:.25s; pointer-events:none; }
.aniplayer-stage.ap-active .ap-top{ opacity:1; transform:none; }
.ap-title{ position:absolute; left:0; right:0; top:50%; transform:translateY(-50%); text-align:center; padding:0 92px; color:#fff; font-size:16px; font-weight:600; text-shadow:0 1px 8px rgba(0,0,0,.8); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; pointer-events:none; }
.ap-top-spacer{ flex:1; }
.ap-center{ position:absolute; inset:0; z-index:8; display:flex; align-items:center; justify-content:center; pointer-events:none; }
.ap-bigplay{ pointer-events:auto; width:76px; height:76px; border-radius:50%; border:none; cursor:pointer; color:#fff; background:rgba(20,20,22,.5); -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; transition:transform .2s, background .2s, opacity .2s; }
.ap-bigplay:hover{ transform:scale(1.08); background:rgba(255,79,163,.75); }
.ap-bigplay .mdui-icon{ font-size:44px; }
.aniplayer-stage.ap-playing .ap-bigplay{ opacity:0; pointer-events:none; }
.ap-spinner{ position:absolute; width:52px; height:52px; border-radius:50%; border:3px solid rgba(255,255,255,.22); border-top-color:#fff; animation:ap-spin .8s linear infinite; display:none; }
.aniplayer-stage.ap-loading .ap-spinner{ display:block; }
.aniplayer-stage.ap-loading .ap-bigplay{ opacity:0; }
@keyframes ap-spin{ to{ transform:rotate(360deg); } }
.ap-bottom{ position:absolute; left:0; right:0; bottom:0; z-index:12; padding:0 14px 10px; opacity:0; transform:translateY(8px); transition:.25s; pointer-events:none; }
.aniplayer-stage.ap-active .ap-bottom{ opacity:1; transform:none; pointer-events:auto; }
.ap-progress{ position:relative; height:15px; display:flex; align-items:center; cursor:pointer; }
.ap-progress::before{ content:""; position:absolute; left:0; right:0; height:4px; border-radius:2px; background:rgba(255,255,255,.28); transition:height .12s; }
.ap-progress:hover::before{ height:6px; }
.ap-played{ position:absolute; left:0; height:4px; border-radius:2px; background:linear-gradient(90deg,#ff7dcc,#ff4fa3); width:0; transition:height .12s; }
.ap-progress:hover .ap-played{ height:6px; }
.ap-thumb{ position:absolute; left:0; width:13px; height:13px; border-radius:50%; background:#fff; box-shadow:0 0 6px rgba(0,0,0,.5); transform:translateX(-50%) scale(0); transition:transform .12s; }
.ap-progress:hover .ap-thumb{ transform:translateX(-50%) scale(1); }
.ap-tip{ position:absolute; bottom:20px; left:0; transform:translateX(-50%); background:rgba(0,0,0,.82); color:#fff; font-size:12px; padding:2px 7px; border-radius:4px; pointer-events:none; opacity:0; white-space:nowrap; }
.ap-progress:hover .ap-tip{ opacity:1; }
.ap-row{ display:flex; align-items:center; justify-content:space-between; margin-top:2px; }
.ap-l,.ap-r{ display:flex; align-items:center; gap:2px; }
.ap-btn{ border:none; background:none; color:#fff; cursor:pointer; width:38px; height:38px; border-radius:9px; display:inline-flex; align-items:center; justify-content:center; transition:background .15s; }
.ap-btn:hover{ background:rgba(255,255,255,.16); }
.ap-btn .mdui-icon{ font-size:23px; }
.ap-time{ color:#eaeaea; font-size:13px; margin-left:8px; white-space:nowrap; font-variant-numeric:tabular-nums; }
.ap-vol{ display:flex; align-items:center; }
.ap-menu{ position:absolute; right:12px; bottom:60px; z-index:16; background:rgba(24,24,26,.97); -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); border-radius:10px; padding:5px; min-width:136px; box-shadow:0 10px 30px rgba(0,0,0,.55); display:none; max-height:calc(100% - 72px); overflow-y:auto; }
.aniplayer-stage.ap-menu-open .ap-menu{ display:block; }
.ap-mi{ padding:7px 11px; color:#ddd; font-size:12.5px; border-radius:6px; cursor:pointer; white-space:nowrap; }
.ap-mi:hover{ background:rgba(255,255,255,.12); color:#fff; }
.ap-mi.active{ color:#ff7dcc; }
.ap-eppanel{ position:absolute; top:0; right:0; bottom:0; width:330px; max-width:82%; background:rgba(16,16,18,.97); -webkit-backdrop-filter:blur(12px); backdrop-filter:blur(12px); z-index:18; transform:translateX(102%); transition:transform .28s ease; display:flex; flex-direction:column; box-shadow:-8px 0 30px rgba(0,0,0,.55); }
.aniplayer-stage.ap-panel-open .ap-eppanel{ transform:none; }
.ap-eppanel-head{ display:flex; align-items:center; justify-content:space-between; padding:15px 18px; color:#fff; font-weight:600; border-bottom:1px solid rgba(255,255,255,.08); }
.ap-eppanel-head .sub{ font-size:.78em; color:#9a9aa4; font-weight:400; margin-left:6px; }
.ap-eppanel-close{ border:none; background:none; color:#bbb; cursor:pointer; display:inline-flex; }
.ap-eppanel-body{ padding:14px 16px; overflow-y:auto; }
.ap-epgrid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(52px,1fr)); gap:8px; }
.ap-ep{ display:block; text-align:center; padding:8px 4px; border-radius:6px; background:rgba(255,255,255,.05); color:#c2c2c8; font-size:.88em; text-decoration:none; cursor:pointer; border:1px solid rgba(255,255,255,.08); transition:background .15s, color .15s, border-color .15s; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ap-ep:hover{ background:rgba(255,255,255,.12); color:#fff; }
.ap-ep.active{ background:rgba(255,79,163,.16); color:#ff6ab8; border-color:#ff6ab8; }
.ap-episodes{ max-width:980px; margin:20px auto 4px; }
.ap-eps-head{ color:#eaeaea; font-weight:600; font-size:1em; margin:0 0 12px; }
.ap-eps-sub{ font-size:.8em; color:#9a9aa4; margin-left:8px; font-weight:400; }
.ap-eps-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(48px,1fr)); gap:8px; }
.ap-epgrid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(52px,1fr)); gap:8px; }
.ap-eptabs{ display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; }
.ap-eptab{ padding:5px 14px; border-radius:16px; background:rgba(255,255,255,.06); color:#c2c2c8; font-size:.82em; cursor:pointer; border:1px solid rgba(255,255,255,.1); white-space:nowrap; transition:background .15s,color .15s,border-color .15s; }
.ap-eptab:hover{ background:rgba(255,255,255,.12); color:#fff; }
.ap-eptab.active{ background:rgba(255,79,163,.16); color:#ff6ab8; border-color:#ff6ab8; }
/* 音量弹窗 */
.ap-vol{ position:relative; }
.ap-volpop{ position:absolute; left:50%; bottom:44px; transform:translateX(-50%) translateY(5px); width:92px; padding:6px 8px 7px; background:rgba(28,28,30,.97); -webkit-backdrop-filter:blur(12px); backdrop-filter:blur(12px); border-radius:9px; box-shadow:0 7px 18px rgba(0,0,0,.55); opacity:0; pointer-events:none; transition:opacity .18s, transform .18s; }
.ap-vol.ap-volopen .ap-volpop{ opacity:1; pointer-events:auto; transform:translateX(-50%) translateY(0); }
.ap-volpop-head{ display:flex; justify-content:space-between; align-items:center; gap:4px; margin-bottom:4px; }
.ap-volpop-head .lab{ color:#c8c8ce; font-size:10px; }
.ap-volmute{ border:none; background:none; color:#c8c8ce; cursor:pointer; display:inline-flex; align-items:center; padding:1px; margin-left:auto; }
.ap-volmute .mdui-icon{ font-size:13px; }
.ap-volmute:hover{ color:#fff; }
.ap-volpop-head #apVolVal{ color:#fff; font-size:11px; font-weight:700; font-variant-numeric:tabular-nums; }
.ap-volticks{ display:flex; justify-content:space-between; align-items:flex-end; height:4px; padding:0 1px; margin-bottom:4px; }
.ap-volticks i{ width:1px; height:4px; background:rgba(255,255,255,.32); }
.ap-volbar{ -webkit-appearance:none; appearance:none; width:100%; margin:0; height:3px; border-radius:3px; cursor:pointer; background:linear-gradient(90deg,#e3b341 var(--v,100%), rgba(255,255,255,.22) var(--v,100%)); }
.ap-volbar::-webkit-slider-thumb{ -webkit-appearance:none; width:9px; height:9px; border-radius:50%; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,.5); }
.ap-volbar::-moz-range-thumb{ width:9px; height:9px; border:none; border-radius:50%; background:#fff; }
.ap-volbar::-moz-range-thumb{ width:16px; height:16px; border:none; border-radius:50%; background:#fff; }
/* 更多菜单（带图标） */
.ap-menu-title{ color:#8a8a90; font-size:11px; padding:4px 11px 4px; }
.ap-mi{ display:flex; align-items:center; gap:9px; }
.ap-mi .mdui-icon{ font-size:18px; color:#cbcbd0; }
.ap-mi.active, .ap-mi.active .mdui-icon{ color:#ff7dcc; }
/* 带开关的菜单项 */
.ap-mi-sw{ justify-content:space-between; }
.ap-mi-sw .l{ display:inline-flex; align-items:center; gap:9px; color:#ddd; }
.ap-mi-sw .l~span{ margin-left:14px; }
.ap-switch{ flex:0 0 auto; width:30px; height:16px; border-radius:9px; background:rgba(255,255,255,.22); position:relative; transition:background .2s; }
.ap-switch.on{ background:#ff4fa3; }
.ap-switch::after{ content:""; position:absolute; top:2px; left:2px; width:12px; height:12px; border-radius:50%; background:#fff; transition:left .2s; }
.ap-switch.on::after{ left:16px; }
/* 网页全屏（填满浏览器视口，非系统全屏） */
.aniplayer-stage.ap-webfull{ position:fixed; inset:0; z-index:9999; width:100vw; height:100vh; height:100dvh; max-height:none; border-radius:0; aspect-ratio:auto; }
/* 统计面板 */
.ap-stats{ position:absolute; top:62px; left:16px; z-index:22; width:280px; max-width:72%; background:rgba(10,10,12,.88); -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,.09); border-radius:14px; padding:14px 16px; color:#dcdce2; font-size:13px; display:none; }
.aniplayer-stage.ap-stats-open .ap-stats{ display:block; }
.ap-stats-head{ display:flex; align-items:center; justify-content:space-between; color:#e3b341; font-weight:600; letter-spacing:2px; margin-bottom:8px; }
.ap-stats-head .t{ display:inline-flex; align-items:center; gap:6px; }
.ap-stats-head .mdui-icon{ font-size:18px; }
.ap-stats-close{ border:none; background:none; color:#999; cursor:pointer; display:inline-flex; }
.ap-spark{ width:100%; height:34px; display:block; margin:2px 0 8px; }
.ap-stats-row{ display:flex; justify-content:space-between; padding:3px 0; color:#a9a9b2; }
.ap-stats-row b{ color:#fff; font-weight:600; font-variant-numeric:tabular-nums; }
@media(max-width:600px){
  .ap-title{ font-size:13px; padding:0 76px; }
  .ap-top-spacer{ display:none; }
  .ap-vol{ display:none; }                       /* 手机隐藏音量控件，用设备音量键 */
  .ap-bottom{ padding:0 8px 8px; }
  .ap-btn{ width:33px; height:33px; }
  .ap-btn .mdui-icon{ font-size:21px; }
  .ap-l, .ap-r{ gap:0; }
  .ap-time{ font-size:11px; margin-left:5px; }
  .ap-bigplay{ width:64px; height:64px; }
  .ap-bigplay .mdui-icon{ font-size:38px; }
}
@media(max-width:380px){
  .ap-btn{ width:30px; height:30px; }
  .ap-btn .mdui-icon{ font-size:20px; }
  .ap-time{ font-size:10px; margin-left:3px; }
}
</style>
<div class="mdui-container-fluid">
    <div class="aniplayer">
      <div class="aniplayer-stage ap-active" id="apStage">
        <div class="mdui-video-fluid" id="dplayer"></div>
        <div class="ap-scrim ap-scrim-top"></div>
        <div class="ap-scrim ap-scrim-bottom"></div>
        <div class="ap-top">
          <div class="ap-title">${apEscHtml(title)}</div>
          <div class="ap-top-spacer"></div>
        </div>
        <div class="ap-center"><div class="ap-spinner"></div><button class="ap-bigplay" id="apBig"><i class="mdui-icon material-icons">play_arrow</i></button></div>
        <div class="ap-menu" id="apMenu"></div>
        <div class="ap-eppanel" id="apEpPanel">
          <div class="ap-eppanel-head"><span>選集 <span class="sub" id="apPanelSub"></span></span><button class="ap-eppanel-close" id="apPanelClose"><i class="mdui-icon material-icons">close</i></button></div>
          <div class="ap-eppanel-body" id="apPanelBody"></div>
        </div>
        <div class="ap-stats" id="apStats">
          <div class="ap-stats-head"><span class="t"><i class="mdui-icon material-icons">show_chart</i> STATS</span><button class="ap-stats-close" id="apStatsClose"><i class="mdui-icon material-icons">close</i></button></div>
          <canvas class="ap-spark" id="apSpark" width="248" height="34"></canvas>
          <div id="apStatsRows"></div>
        </div>
        <div class="ap-bottom">
          <div class="ap-progress" id="apProg"><div class="ap-played" id="apPlayed"></div><div class="ap-thumb" id="apThumb"></div><div class="ap-tip" id="apTip">0:00</div></div>
          <div class="ap-row">
            <div class="ap-l">
              <button class="ap-btn" id="apPlay"><i class="mdui-icon material-icons">play_arrow</i></button>
              <span class="ap-time"><span id="apCur">0:00</span> / <span id="apDur">0:00</span></span>
            </div>
            <div class="ap-r">
              <button class="ap-btn" id="apList" title="選集"><i class="mdui-icon material-icons">playlist_play</i></button>
              <div class="ap-vol" id="apVolWrap">
                <div class="ap-volpop" id="apVolPop">
                  <div class="ap-volpop-head"><span class="lab">音量</span><span id="apVolVal">100</span><button class="ap-volmute" id="apMuteToggle" title="靜音"><i class="mdui-icon material-icons">volume_up</i></button></div>
                  <div class="ap-volticks">${new Array(11).fill('<i></i>').join('')}</div>
                  <input type="range" id="apVol" class="ap-volbar" min="0" max="100" value="100"/>
                </div>
                <button class="ap-btn" id="apMute" title="音量"><i class="mdui-icon material-icons">volume_up</i></button>
              </div>
              <button class="ap-btn" id="apMore" title="更多"><i class="mdui-icon material-icons">more_vert</i></button>
              <button class="ap-btn" id="apWebFull" title="網頁全屏"><i class="mdui-icon material-icons">crop_free</i></button>
              <button class="ap-btn" id="apFull" title="全螢幕"><i class="mdui-icon material-icons">fullscreen</i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="apEpisodes" class="ap-episodes"></div>
    ${fileName_mobile}
    <br> 如果以上片段無法播放，可使用以下 VLC 播放連結 (請使用 Google Chrome)
	<br>
	<br>${playBtn}
	<!-- 固定标签 -->
	<div class="mdui-textfield">
	  <label style="color:white;" class="mdui-textfield-label">下載地址</label>
	  <input id="apDlInput" style="color:white;" class="mdui-textfield-input" type="text" value="${encodedLink}"/>
	</div>
    <button href="${share}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>
    <button id="apDlBtn" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>
    <br>
</div>
	`;
    $('#content').html(content);
    //DP Player implement — 自定义皮肤 + 原地换源（换集不跳转、不退出全屏）
    var gid = function (id) { return document.getElementById(id); };
    var stage = gid('apStage');
    var player = { dp: null, video: null };
    var hideTimer = null, subOn = true;
    var prefRate = 1, prefVol = null, prefMuted = false;   // 换集时保留倍速/音量
    var headBytes = 0, lastFps = 0, frames = 0, fpsT0 = 0, spark = [], mountSeq = 0;
    var autoNext = localStorage.getItem('ap_autonext') !== '0';   // 自动播放下一集（默认开，记忆到 localStorage）
    // 生命周期清理：进入时先拆掉上一次运行残留的 document 监听器/定时器/DPlayer（防 SPA 跨页累积泄漏）
    if (window.__apCleanup) { try { window.__apCleanup(); } catch (e) { } }
    var docHandlers = [], winHandlers = [];
    function onDoc(type, fn, opts) { document.addEventListener(type, fn, opts); docHandlers.push([type, fn, opts]); }
    function onWin(type, fn, opts) { window.addEventListener(type, fn, opts); winHandlers.push([type, fn, opts]); }
    var elPlay = gid('apPlay'), elCur = gid('apCur'), elDur = gid('apDur'),
        elProg = gid('apProg'), elPlayed = gid('apPlayed'), elThumb = gid('apThumb'), elTip = gid('apTip'),
        elMute = gid('apMute'), elVol = gid('apVol'), elVolVal = gid('apVolVal'), elMenu = gid('apMenu'),
        elVolWrap = gid('apVolWrap'), elMuteToggle = gid('apMuteToggle');

    function fmt(t) {
        if (!isFinite(t) || t < 0) t = 0;
        t = Math.floor(t);
        var h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
        return (h ? h + ':' : '') + (h ? String(m).padStart(2, '0') : String(m)) + ':' + String(s).padStart(2, '0');
    }
    function setPlayIcon() { var v = player.video; if (!v) return; elPlay.querySelector('.mdui-icon').textContent = v.paused ? 'play_arrow' : 'pause'; stage.classList.toggle('ap-playing', !v.paused); }
    function togglePlay() { var v = player.video; if (!v) return; if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () { }); } else v.pause(); }
    function syncVol() {
        var v = player.video; if (!v) return;
        var p = Math.round((v.muted ? 0 : v.volume) * 100);
        elVol.value = p; elVol.style.setProperty('--v', p + '%'); if (elVolVal) elVolVal.textContent = p;
        var muted = v.muted || v.volume === 0;
        var icon = muted ? 'volume_off' : (v.volume < 0.5 ? 'volume_down' : 'volume_up');
        elMute.querySelector('.mdui-icon').textContent = icon;
        if (elMuteToggle) elMuteToggle.querySelector('.mdui-icon').textContent = icon;
    }
    function showControls(keep) {
        stage.classList.add('ap-active');
        if (hideTimer) clearTimeout(hideTimer);
        if (keep) return;
        hideTimer = setTimeout(function () {
            var v = player.video;
            if (v && !v.paused && !stage.classList.contains('ap-menu-open') && !stage.classList.contains('ap-panel-open') && !stage.classList.contains('ap-stats-open') && !elVolWrap.classList.contains('ap-volopen')) stage.classList.remove('ap-active');
        }, 3000);
    }
    function seekAt(x) { var v = player.video; if (!v) return; var rc = elProg.getBoundingClientRect(); var r = Math.min(1, Math.max(0, (x - rc.left) / rc.width)); if (v.duration) v.currentTime = r * v.duration; }
    function takeShot() {
        var v = player.video; if (!v) return;
        try {
            var c = document.createElement('canvas'); c.width = v.videoWidth || 1280; c.height = v.videoHeight || 720;
            c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
            var a = document.createElement('a'); a.download = (title || 'screenshot') + '_' + Math.floor(v.currentTime) + 's.png'; a.href = c.toDataURL('image/png'); a.click();
        } catch (err) { try { mdui.snackbar({ message: '截圖失敗（跨域限制）', position: 'right-top' }); } catch (e) { } }
    }
    function drawSpark() {
        var cv = gid('apSpark'); if (!cv) return; var ctx = cv.getContext('2d'); ctx.clearRect(0, 0, cv.width, cv.height);
        if (spark.length < 2) return; var mx = Math.max.apply(null, spark) || 1, mn = Math.min.apply(null, spark);
        ctx.beginPath(); ctx.strokeStyle = '#e3b341'; ctx.lineWidth = 1.5;
        spark.forEach(function (val, i) { var x = i / (spark.length - 1) * cv.width, y = cv.height - ((val - mn) / ((mx - mn) || 1)) * (cv.height - 4) - 2; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
        ctx.stroke();
    }
    function updateStats() {
        if (!stage.isConnected) { if (window.__apStatsTimer) { clearInterval(window.__apStatsTimer); window.__apStatsTimer = null; } return; }
        var v = player.video; if (!v || !stage.classList.contains('ap-stats-open')) return;
        var q = v.getVideoPlaybackQuality ? v.getVideoPlaybackQuality() : null;
        var buf = 0; try { if (v.buffered.length) buf = v.buffered.end(v.buffered.length - 1) - v.currentTime; } catch (e) { }
        var avgKbps = (headBytes && v.duration) ? Math.round(headBytes * 8 / v.duration / 1000) : null;
        var conn = navigator.connection || {};
        var rows = [
            ['resolution', (v.videoWidth || 0) + '×' + (v.videoHeight || 0)],
            ['avg bitrate', avgKbps ? avgKbps + ' kbps' : '—'],
            ['render fps', lastFps ? lastFps.toFixed(1) + ' fps' : '—'],
            ['dropped', q ? (q.droppedVideoFrames + ' / ' + q.totalVideoFrames) : '—'],
            ['buffer', buf.toFixed(1) + ' s'],
            ['network', conn.downlink ? conn.downlink + ' Mbps' : '—'],
            ['speed', v.playbackRate + '×'],
            ['volume', Math.round((v.muted ? 0 : v.volume) * 100) + '%']
        ];
        var rowsEl = gid('apStatsRows'); if (rowsEl) rowsEl.innerHTML = rows.map(function (r) { return '<div class="ap-stats-row"><span>' + r[0] + '</span><b>' + r[1] + '</b></div>'; }).join('');
        spark.push(lastFps || 0); if (spark.length > 40) spark.shift(); drawSpark();
    }

    // 把控件事件绑定到（新的）<video> 元素上——每次换集后调用
    function attachVideo(v) {
        v.addEventListener('play', setPlayIcon);
        v.addEventListener('pause', function () { setPlayIcon(); showControls(true); });
        v.addEventListener('loadedmetadata', function () { if (v === player.video) { elDur.textContent = fmt(v.duration); syncVol(); } });
        v.addEventListener('timeupdate', function () {
            if (v !== player.video) return;
            elCur.textContent = fmt(v.currentTime);
            var d = v.duration || 0, r = d ? v.currentTime / d : 0;
            elPlayed.style.width = (r * 100) + '%'; elThumb.style.left = (r * 100) + '%';
        });
        v.addEventListener('volumechange', function () { if (v === player.video) { prefVol = v.volume; prefMuted = v.muted; syncVol(); } });
        v.addEventListener('ratechange', function () { if (v === player.video) { prefRate = v.playbackRate; } });
        v.addEventListener('waiting', function () { if (v === player.video) stage.classList.add('ap-loading'); });
        v.addEventListener('seeking', function () { if (v === player.video) stage.classList.add('ap-loading'); });
        ['playing', 'canplay', 'seeked'].forEach(function (ev) { v.addEventListener(ev, function () { if (v === player.video) stage.classList.remove('ap-loading'); }); });
        v.addEventListener('ended', function () { if (v !== player.video) return; if (autoNext && !variants.length) { pendingAutoNext = true; return; } playNext(); });
        if (v.requestVideoFrameCallback) {
            var rvfc = function (now) { if (v !== player.video) return; frames++; if (!fpsT0) fpsT0 = now; if (now - fpsT0 >= 1000) { lastFps = frames * 1000 / (now - fpsT0); frames = 0; fpsT0 = now; } v.requestVideoFrameCallback(rvfc); };
            v.requestVideoFrameCallback(rvfc);
        }
    }

    // 挂载 / 重挂载 DPlayer（stage 不变 → 全屏不中断，实测 destroy 不会 exitFullscreen）
    function mount(url, subUrl, autoplay) {
        if (player.dp) { try { player.dp.destroy(); } catch (e) { } }
        var c = gid('dplayer'); if (c) c.innerHTML = '';
        lastFps = 0; frames = 0; fpsT0 = 0; spark = [];
        player.dp = new DPlayer({
            container: c, autoplay: false, screenshot: false, airplay: true, theme: '#FF4FA3', preload: 'auto', hotkey: true,
            video: { url: url, pic: 'https://gcore.jsdelivr.net/gh/RyanL-29/aniopen/background.png', type: 'auto' },
            subtitle: { url: subUrl, type: 'webvtt', fontSize: '1.6em', bottom: '13px', color: '#fff' }
        });
        player.video = player.dp.video;
        attachVideo(player.video);
        player.video.playbackRate = prefRate;
        if (prefVol != null) { player.video.volume = prefVol; player.video.muted = prefMuted; }
        if (!subOn) { var stx = stage.querySelector('.dplayer-subtitle'); if (stx) stx.style.display = 'none'; }
        headBytes = 0; var reqId = ++mountSeq; try { fetch(url, { method: 'HEAD' }).then(function (r) { if (reqId !== mountSeq) return; headBytes = parseInt(r.headers.get('content-length') || '0', 10) || 0; }).catch(function () { }); } catch (e) { }
        setPlayIcon(); syncVol();
        if (autoplay) { var p = player.video.play(); if (p && p.catch) p.catch(function () { }); }
    }

    // ---- 控件绑定（只绑一次，全部引用 player.video）----
    // 屏蔽 DPlayer 原生右键菜单（.dplayer-menu）：#dplayer 容器在 mount 里只清空 innerHTML、节点本身不重建，绑一次即可
    var apDpBox = gid('dplayer');
    if (apDpBox) apDpBox.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); });
    elPlay.onclick = togglePlay; gid('apBig').onclick = togglePlay;
    var seeking = false;
    elProg.addEventListener('mousedown', function (e) { seeking = true; seekAt(e.clientX); });
    onDoc('mousemove', function (e) { if (seeking) seekAt(e.clientX); });
    onDoc('mouseup', function () { seeking = false; });
    elProg.addEventListener('mousemove', function (e) { var v = player.video; var rc = elProg.getBoundingClientRect(); var r = Math.min(1, Math.max(0, (e.clientX - rc.left) / rc.width)); elTip.style.left = (r * 100) + '%'; elTip.textContent = fmt(r * ((v && v.duration) || 0)); });
    // 移动端触摸拖动进度条（去掉±10s后手机也能精细拖动定位）
    elProg.addEventListener('touchstart', function (e) { seeking = true; if (e.touches[0]) seekAt(e.touches[0].clientX); }, { passive: true });
    elProg.addEventListener('touchmove', function (e) { if (seeking && e.touches[0]) { seekAt(e.touches[0].clientX); e.preventDefault(); } }, { passive: false });
    onDoc('touchend', function () { seeking = false; });
    elVol.addEventListener('input', function () { var v = player.video; if (v) { v.muted = false; v.volume = this.value / 100; } });
    // 喇叭按钮 = 开/关音量弹窗（可点击关闭）；弹窗内的按钮 = 静音
    elMute.onclick = function (e) { e.stopPropagation(); stage.classList.remove('ap-menu-open'); elVolWrap.classList.toggle('ap-volopen'); };
    if (elMuteToggle) elMuteToggle.onclick = function (e) { e.stopPropagation(); var v = player.video; if (v) v.muted = !v.muted; };
    gid('apVolPop').addEventListener('click', function (e) { e.stopPropagation(); });
    var speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    // 渲染倍速子菜单（从「更多」里的「播放速度」进入）
    function renderSpeedMenu() {
        var cur = player.video ? player.video.playbackRate : prefRate;
        elMenu.setAttribute('data-menu', 'speed');
        elMenu.innerHTML = '<div class="ap-mi" id="miSpeedBack"><i class="mdui-icon material-icons">arrow_back</i>播放速度</div>' + speeds.map(function (s) { return '<div class="ap-mi ap-mi-s' + (cur === s ? ' active' : '') + '" data-s="' + s + '"><i class="mdui-icon material-icons"' + (cur === s ? '' : ' style="visibility:hidden"') + '>check</i>' + (s === 1 ? '正常' : s + '×') + '</div>'; }).join('');
        gid('miSpeedBack').onclick = function (ev) { ev.stopPropagation(); renderMoreMenu(); };   // 返回更多菜单
        elMenu.querySelectorAll('.ap-mi-s').forEach(function (it) { it.onclick = function () { var s = parseFloat(this.getAttribute('data-s')); prefRate = s; if (player.video) player.video.playbackRate = s; stage.classList.remove('ap-menu-open'); }; });
    }
    // 渲染「更多」主菜单内容（初次打开 + 从倍速子菜单返回都用它）
    function renderMoreMenu() {
        elMenu.setAttribute('data-menu', 'more');
        var curRate = player.video ? player.video.playbackRate : prefRate;
        elMenu.innerHTML =
            '<div class="ap-menu-title">更多</div>' +
            '<div class="ap-mi ap-mi-sw" id="miAuto"><span class="l"><i class="mdui-icon material-icons">skip_next</i>自動連播</span><span class="ap-switch' + (autoNext ? ' on' : '') + '"></span></div>' +
            '<div class="ap-mi ap-mi-sw" id="miSub"><span class="l"><i class="mdui-icon material-icons">subtitles</i>字幕</span><span class="ap-switch' + (subOn ? ' on' : '') + '"></span></div>' +
            '<div class="ap-mi ap-mi-sw" id="miSpeed"><span class="l"><i class="mdui-icon material-icons">slow_motion_video</i>播放速度</span><span style="color:#9a9aa4;font-size:.9em">' + (curRate === 1 ? '正常' : curRate + '×') + ' ›</span></div>' +
            '<div class="ap-mi" id="miShot"><i class="mdui-icon material-icons">photo_camera</i>截圖</div>' +
            '<div class="ap-mi" id="miStats"><i class="mdui-icon material-icons">show_chart</i>顯示統計</div>' +
            '<div class="ap-mi" id="miPip"><i class="mdui-icon material-icons">picture_in_picture_alt</i>畫中畫</div>';
        gid('miSpeed').onclick = function (ev) { ev.stopPropagation(); renderSpeedMenu(); };
        gid('miAuto').onclick = function (ev) {
            ev.stopPropagation();
            autoNext = !autoNext;
            try { localStorage.setItem('ap_autonext', autoNext ? '1' : '0'); } catch (e) { }
            var sw = this.querySelector('.ap-switch'); if (sw) sw.classList.toggle('on', autoNext);
            try { mdui.snackbar({ message: autoNext ? '已開啟自動連播' : '已關閉自動連播', position: 'right-top', timeout: 1500 }); } catch (e) { }
        };
        gid('miSub').onclick = function (ev) {
            ev.stopPropagation();
            subOn = !subOn;
            var stx = stage.querySelector('.dplayer-subtitle'); if (stx) stx.style.display = subOn ? '' : 'none';
            var sw = this.querySelector('.ap-switch'); if (sw) sw.classList.toggle('on', subOn);
        };
        gid('miShot').onclick = function () { takeShot(); stage.classList.remove('ap-menu-open'); };
        gid('miStats').onclick = function () { stage.classList.toggle('ap-stats-open'); stage.classList.remove('ap-menu-open'); };
        gid('miPip').onclick = function () { try { var v = player.video; if (document.pictureInPictureElement) document.exitPictureInPicture(); else if (v && v.requestPictureInPicture) v.requestPictureInPicture(); } catch (e) { } stage.classList.remove('ap-menu-open'); };
    }
    gid('apMore').onclick = function (e) {
        e.stopPropagation(); stage.classList.remove('ap-panel-open', 'ap-stats-open'); elVolWrap.classList.remove('ap-volopen');
        if (stage.classList.contains('ap-menu-open')) { stage.classList.remove('ap-menu-open'); return; }   // 单击开/关，任何子菜单下一次即关
        renderMoreMenu();
        stage.classList.add('ap-menu-open');
    };
    elMenu.addEventListener('click', function (e) { e.stopPropagation(); });
    gid('apStatsClose').onclick = function () { stage.classList.remove('ap-stats-open'); };
    if (window.__apStatsTimer) clearInterval(window.__apStatsTimer);
    window.__apStatsTimer = setInterval(updateStats, 1000);
    gid('apFull').onclick = function () {
        var d = document;
        if (d.fullscreenElement || d.webkitFullscreenElement) { var ex = d.exitFullscreen || d.webkitExitFullscreen; if (ex) ex.call(d); }
        else {
            if (stage.classList.contains('ap-webfull')) setWebFull(false);   // 系统全屏与网页全屏互斥，避免叠加
            var rq = stage.requestFullscreen || stage.webkitRequestFullscreen;
            if (rq) { try { rq.call(stage); } catch (e) { } }
            else { var v = player.video; if (v && v.webkitEnterFullscreen) try { v.webkitEnterFullscreen(); } catch (e) { } }   // iOS 回退到原生 video 全屏
        }
    };
    function apFsSync() { var b = gid('apFull'); if (b) b.querySelector('.mdui-icon').textContent = (document.fullscreenElement || document.webkitFullscreenElement) ? 'fullscreen_exit' : 'fullscreen'; }
    onDoc('fullscreenchange', apFsSync); onDoc('webkitfullscreenchange', apFsSync);
    // 网页全屏：填满浏览器视口（非系统全屏）
    function setWebFull(on) {
        if (on && (document.fullscreenElement || document.webkitFullscreenElement)) { var ex = document.exitFullscreen || document.webkitExitFullscreen; if (ex) try { ex.call(document); } catch (e) { } }   // 与系统全屏互斥
        stage.classList.toggle('ap-webfull', on);
        document.body.style.overflow = on ? 'hidden' : '';
        var b = gid('apWebFull'); if (b) b.querySelector('.mdui-icon').textContent = on ? 'settings_overscan' : 'crop_free';
    }
    gid('apWebFull').onclick = function (e) { e.stopPropagation(); setWebFull(!stage.classList.contains('ap-webfull')); };
    // Esc 退出网页全屏（若正处于系统全屏，先让浏览器退出系统全屏，本次不动网页全屏）
    onDoc('keydown', function (e) { if (e.key === 'Escape' && stage.classList.contains('ap-webfull') && !(document.fullscreenElement || document.webkitFullscreenElement)) setWebFull(false); });
    // 浏览器/后退导航离开时，恢复 body 滚动，避免目录页被锁死
    onWin('popstate', function () { if (stage.classList.contains('ap-webfull')) setWebFull(false); document.body.style.overflow = ''; try { if (player.video) player.video.pause(); } catch (e) { } try { if (player.dp) player.dp.destroy(); } catch (e) { } });   // 离开播放页停止播放，避免音频继续 + DPlayer 泄漏
    gid('apList').onclick = function (e) { e.stopPropagation(); stage.classList.remove('ap-menu-open', 'ap-stats-open'); elVolWrap.classList.remove('ap-volopen'); stage.classList.toggle('ap-panel-open'); };
    gid('apPanelClose').onclick = function (e) { e.stopPropagation(); stage.classList.remove('ap-panel-open'); };
    gid('apEpPanel').addEventListener('click', function (e) { e.stopPropagation(); });
    var touchReveal = false;
    stage.addEventListener('click', function (e) {
        var isVideo = e.target === stage || e.target.id === 'dplayer' || e.target.tagName === 'VIDEO' || String(e.target.className || '').indexOf('dplayer-video') >= 0;
        if (!isVideo) return;
        if (elVolWrap.classList.contains('ap-volopen')) { elVolWrap.classList.remove('ap-volopen'); return; }
        if (stage.classList.contains('ap-menu-open')) { stage.classList.remove('ap-menu-open'); return; }
        if (stage.classList.contains('ap-panel-open')) { stage.classList.remove('ap-panel-open'); return; }
        if (stage.classList.contains('ap-stats-open')) { stage.classList.remove('ap-stats-open'); return; }
        if (touchReveal) { touchReveal = false; return; }   // 触屏此次点击仅为唤出控件，不切换播放
        togglePlay();
    });
    onDoc('click', function () { stage.classList.remove('ap-menu-open', 'ap-stats-open'); elVolWrap.classList.remove('ap-volopen'); });
    stage.addEventListener('mousemove', function () { if (player.dp) player.dp.focus = true; showControls(); });   // 保持 DPlayer 键盘热键(方向键快进快退)激活
    stage.addEventListener('click', function () { if (player.dp) player.dp.focus = true; }, true);
    stage.addEventListener('touchstart', function () { touchReveal = !stage.classList.contains('ap-active'); showControls(); }, { passive: true });
    // Download 用 JS 绑定（避免文件名含单引号时内联 onclick 语法错误）；读同步更新的下载地址
    gid('apDlBtn').onclick = function () { var di = gid('apDlInput'); if (di) location.href = di.value; };

    // 注册清理钩子：下次进入播放页或本页卸载时拆除本次运行的 document 监听器 / 定时器 / DPlayer
    window.__apCleanup = function () {
        docHandlers.forEach(function (h) { document.removeEventListener(h[0], h[1], h[2]); });
        winHandlers.forEach(function (h) { window.removeEventListener(h[0], h[1], h[2]); });
        if (window.__apStatsTimer) { clearInterval(window.__apStatsTimer); window.__apStatsTimer = null; }
        try { document.body.style.overflow = ''; } catch (e) { }
        try { if (player.dp) player.dp.destroy(); } catch (e) { }
    };

    mount(encodedLink, subtitle, false);
    showControls(true);

    // ===== 选集（分类标签 + 原地换源，不跳转、不退出全屏）=====
    // 注意：ap* 助手一律对「已解码」的文件名操作；rawName 是编码路径段，仅在此处解码一次（避免二次解码）。
    function apDecode(s) { try { return decodeURIComponent(s); } catch (e) { return s; } }
    function apBase(fn) {   // 去掉配音标记/结尾集数的基础番名（原版与配音共享）
        var s = fn.replace(/\.[^.]+$/, "").replace(/^\s*\[[^\]]*\]\s*/, "").replace(/\[[^\]]*\]/g, " ").replace(/[（(][^）)]*[）)]/g, " ");
        s = s.replace(/\s+-\s+\d{1,4}\s*$/, "");   // 去掉结尾“ - 集数”（只认末尾，避免“- 2nd Season”被误当集数）
        return s.replace(/\s+/g, " ").trim();
    }
    function apDub(fn) {     // 配音/语言分类标签（允许标签内有额外字，如 [中文配音版]）
        var m = fn.match(/\[\s*(中文配音|國語|国语|國配|国配|中配|粵語|粤语|台配|日配|雙語|双语)[^\]]*\]/);
        return m ? m[1] : "原版";
    }
    function apEp(fn) { var s = fn.replace(/\.[^.]+$/, "").replace(/\[[^\]]*\]/g, " "); var m = s.match(/\s+-\s+(\d{1,4})\s*$/); return m ? parseInt(m[1], 10) : null; }
    function apEsc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
    function apTitleOf(fn) { var s = fn.replace(/\.[^.]+$/, "").replace(/^\s*\[[^\]]*\]\s*/, "").replace(/\[[^\]]*\]/g, " ").replace(/\s+/g, " ").trim(); return s || fn; }

    var dirPath = path.substring(0, path.lastIndexOf('/') + 1);
    var curName = apDecode(rawName);   // 已解码
    var curBase = apBase(curName);
    var apPwd = localStorage.getItem('password' + dirPath);
    var viewLabel = null;              // 用户手动选中的分类标签（两个选集面板共享）

    // 原地切集：换源 + 更新地址栏(不 render)/标题/下载区/高亮，保持全屏
    function switchEpisode(name) {
        var enc = encodeURIComponent(name).replaceAll(/%25/g, "%");   // 与初始构建一致
        var view = dirPath + enc + '?a=view';
        var url = window.location.origin + dirPath + enc;
        var sub = url.replace(/\.[^.\/]+$/, "") + '.vtt';
        try { history.replaceState(null, '', view); } catch (e) { }   // 只占一条历史，返回一次即回目录
        curName = name; viewLabel = null;
        mount(url, sub, true);
        stage.classList.remove('ap-panel-open', 'ap-menu-open', 'ap-stats-open');
        var tt = apTitleOf(name); title = tt;   // 同步外层 title（截图文件名用）
        var te = stage.querySelector('.ap-title'); if (te) te.textContent = tt; try { document.title = tt; } catch (e) { }
        var fnEl = gid('apFileName'); if (fnEl) fnEl.textContent = tt;
        var di = gid('apDlInput'); if (di) di.value = url;   // Download 按钮读此值
        var sb = gid('copybt'); if (sb) sb.setAttribute('href', url + '?a=view');   // 分享用绝对 URL
        var vl = gid('apVlcLink'); if (vl) vl.setAttribute('href', 'vlc://' + url);
        renderAll();
        showControls();
    }

    var variants = [];  // [{label, eps:[{name,ep}]}]
    var pendingAutoNext = false;   // 若 ended 早于选集列表返回，待列表就绪后补播
    // 播放完自动下一集（同一分类内的下一集）
    function playNext() {
        if (!autoNext || !variants.length) return false;
        var grp = variants.filter(function (v) { return v.eps.some(function (e) { return e.name === curName; }); })[0]
            || variants.filter(function (v) { return v.label === apDub(curName); })[0];   // 兜底：按配音分类找组
        if (!grp) return false;
        var curEp = apEp(curName), idx = -1;
        for (var k = 0; k < grp.eps.length; k++) { if (grp.eps[k].name === curName || (curEp != null && grp.eps[k].ep === curEp)) { idx = k; break; } }
        if (idx < 0 || idx + 1 >= grp.eps.length) { try { mdui.snackbar({ message: '已是最後一集', position: 'right-top', timeout: 1500 }); } catch (e) { } return false; }
        switchEpisode(grp.eps[idx + 1].name);
        return true;
    }
    function activeLabelNow() {
        if (viewLabel && variants.some(function (v) { return v.label === viewLabel; })) return viewLabel;
        var playing = variants.filter(function (v) { return v.eps.some(function (e) { return e.name === curName; }); })[0];
        return (playing || variants[0]).label;
    }
    function renderInto(root, withHead) {
        if (!root || !variants.length) return;
        var activeLabel = activeLabelNow();
        var cur = variants.filter(function (v) { return v.label === activeLabel; })[0] || variants[0];
        var tabs = variants.length > 1
            ? '<div class="ap-eptabs">' + variants.map(function (v) { return '<span class="ap-eptab' + (v.label === activeLabel ? ' active' : '') + '" data-label="' + apEsc(v.label) + '">' + apEsc(v.label) + '<span style="opacity:.6"> · ' + v.eps.length + '</span></span>'; }).join('') + '</div>'
            : '';
        var grid = cur.eps.map(function (e) {
            var label = e.ep != null ? e.ep : apTitleOf(e.name);
            var active = e.name === curName ? ' active' : '';
            return '<a class="ap-ep' + active + '" data-name="' + apEsc(e.name) + '" title="' + apEsc(e.name) + '">' + apEsc(String(label)) + '</a>';
        }).join('');
        var head = withHead ? '<div class="ap-eps-head">選集<span class="ap-eps-sub">共 ' + cur.eps.length + ' 集</span></div>' : '';
        root.innerHTML = head + tabs + '<div class="ap-epgrid">' + grid + '</div>';
        root.querySelectorAll('.ap-eptab').forEach(function (t) {
            t.addEventListener('click', function (ev) {
                ev.stopPropagation();
                viewLabel = this.getAttribute('data-label');   // 两个面板共享手选分类
                renderAll();
            });
        });
        bindEps(root);
    }
    function bindEps(container) {
        container.querySelectorAll('.ap-ep').forEach(function (a) {
            a.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); switchEpisode(this.getAttribute('data-name')); });
        });
    }
    function renderAll() {
        renderInto(gid('apEpisodes'), true);
        renderInto(gid('apPanelBody'), false);
        var ps = gid('apPanelSub');
        if (ps) { var tot = variants.reduce(function (n, v) { return n + v.eps.length; }, 0); ps.textContent = variants.length > 1 ? (variants.length + ' 版本 · 共 ' + tot + ' 集') : ('共 ' + tot + ' 集'); }
    }

    $.post(dirPath, JSON.stringify({ password: apPwd || '' }), function (data) {
        if (!stage.isConnected) return;   // 已离开本播放页（快速跨页导航），丢弃过期回调，避免污染新页面
        var hideList = function () { var lb = gid('apList'); if (lb) lb.style.display = 'none'; };
        var obj; try { obj = JSON.parse(data); } catch (e) { hideList(); return; }
        if (!obj || obj.error || !obj.files) { hideList(); return; }
        var byLabel = {};
        obj.files.forEach(function (it) {
            if (!it || !it.name || it.mimeType === 'application/vnd.google-apps.folder') return;
            var ext = (it.name.split('.').pop() || '').toLowerCase();
            if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf('|' + ext + '|') < 0) return;
            if (apBase(it.name) !== curBase) return;   // 同一部番（含各配音版本）；it.name 已解码，不再二次解码
            var lbl = apDub(it.name);
            (byLabel[lbl] = byLabel[lbl] || []).push({ name: it.name, ep: apEp(it.name) });
        });
        var labels = Object.keys(byLabel);
        if (!labels.length) { hideList(); return; }
        labels.sort(function (a, b) { if (a === '原版') return -1; if (b === '原版') return 1; return a < b ? -1 : 1; });
        variants = labels.map(function (l) {
            var eps = byLabel[l].sort(function (a, b) { return (a.ep == null ? 1e9 : a.ep) - (b.ep == null ? 1e9 : b.ep); });
            // 同集去重（同画质/字幕多文件时避免出现重复集号 tile）；当前播放文件优先保留
            var seenEp = {}, uniq = [];
            eps.forEach(function (e) {
                if (e.ep == null) { uniq.push(e); return; }
                if (seenEp[e.ep] != null) { if (e.name === curName) uniq[seenEp[e.ep]] = e; return; }
                seenEp[e.ep] = uniq.length; uniq.push(e);
            });
            return { label: l, eps: uniq };
        });
        var total = variants.reduce(function (n, v) { return n + v.eps.length; }, 0);
        if (total < 2 && variants.length < 2) { variants = []; hideList(); return; }   // 单集：清空以免 ended 时误弹「已是最後一集」
        renderAll();
        if (pendingAutoNext) { pendingAutoNext = false; if (player.video && player.video.ended) playNext(); }
    });
}

// 文件展示 音频 |mp3|m4a|wav|ogg|
function file_audio(path) {
    var linkComp = path.split('/');
    var encodedLink = window.location.origin;
    let fileName_mobile = ``
    if (screen.width < 570) {
        fileName_mobile = `<p style="overflow-wrap: break-word;">${decodeURIComponent(linkComp.at(-1).replace(/.mp3|.m4a|.wav|.ogg/g, ""))}</p>`
    }
    for (i = 1; i < linkComp.length; i++) {
        var pathcomp = decodeURIComponent(linkComp[i])
        pathcomp = encodeURIComponent(pathcomp);
        encodedLink = encodedLink + '/' + pathcomp;
    }
    encodedLink = encodedLink.replaceAll(/%25/g, "%");
    var share = encodedLink + "?a=view";
    var content = `
<div class="mdui-container-fluid">
	<br>
	<audio class="mdui-center" preload controls>
	  <source src="${encodedLink}"">
	</audio>
	<br>
    ${fileName_mobile}
	<!-- 固定标签 -->
	<div class="mdui-textfield">
	  <label style="color:white;" class="mdui-textfield-label">下載地址</label>
	  <input style="color:white;" class="mdui-textfield-input" type="text" value="${encodedLink}"/>
	</div>
    <button href="${share}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>
    <button onclick="javascript:location.href='${encodedLink}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>
    <br>
</div>
	`;
    $('#content').html(content);
}


// 图片展示 bmp|jpg|jpeg|png|gif
function file_image(path) {
    var linkComp = path.split('/');
    var encodedLink = window.location.origin;
    let fileName_mobile = ""
    if (screen.width < 570) {
        fileName_mobile = `<p style="overflow-wrap: break-word;">${decodeURIComponent(rawshare.at(-1).replace(/.bmp|.jpg|.jpeg|.png|.gif/g, ""))}</p>`
    }
    for (i = 1; i < linkComp.length; i++) {
        var pathcomp = decodeURIComponent(linkComp[i])
        pathcomp = encodeURIComponent(pathcomp);
        encodedLink = encodedLink + '/' + pathcomp;
    }
    encodedLink = encodedLink.replaceAll(/%25/g, "%");
    var share = encodedLink + "?a=view";
    var content = `
<div class="mdui-container-fluid">
	<br>
	<img class="mdui-img-fluid" src="${encodedLink}"/>
	<br>
    ${fileName_mobile}
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">下載地址</label>
	  <input class="mdui-textfield-input" type="text" value="${encodedLink}"/>
	</div>
    <button href="${share}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>
    <button onclick="javascript:location.href='${encodedLink}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>
    <br>
</div>
	`;
    $('#content').html(content);
}


//时间转换
function utc2HK(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
    var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;

    // 增加8个小时，HK时间比utc时间多八个时区
    var unixtimestamp = timestamp + 8 * 60 * 60;

    // 时间戳转为时间
    var unixtimestamp = new Date(unixtimestamp * 1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length)
        + " " + hour.substring(hour.length - 2, hour.length) + ":"
        + minute.substring(minute.length - 2, minute.length) + ":"
        + second.substring(second.length - 2, second.length);
}

// bytes自适应转换到KB,MB,GB
function formatFileSize(bytes) {
    if (bytes >= 1000000000) { bytes = (bytes / 1000000000).toFixed(2) + ' GB'; }
    else if (bytes >= 1000000) { bytes = (bytes / 1000000).toFixed(2) + ' MB'; }
    else if (bytes >= 1000) { bytes = (bytes / 1000).toFixed(2) + ' KB'; }
    else if (bytes > 1) { bytes = bytes + ' bytes'; }
    else if (bytes == 1) { bytes = bytes + ' byte'; }
    else { bytes = ''; }
    return bytes;
}

function covertSizeStringToBytes(fileSize) {
    if (fileSize.includes('GB')) {
        return parseInt(fileSize.split("GB")[0]) * 1073741824
    } else if (fileSize.includes('MB')) {
        return parseInt(fileSize.split("MB")[0]) * 1048576
    } else if (fileSize.includes('KB')) {
        return parseInt(fileSize.split("KB")[0]) * 1024
    }
}

String.prototype.trim = function (char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};


// README.md HEAD.md 支持
function markdown(el, data) {
    if (window.md == undefined) {
        //$.getScript('https://gcore.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',function(){
        window.md = window.markdownit();
        markdown(el, data);
        //});
    } else {
        var html = md.render(data);
        $(el).show().html(html);
    }
}

// 监听回退事件
window.onpopstate = function () {
    var path = window.location.pathname;
    render(path);
}

//Sorting List
function sortFileList(sortTarget) {
    var list, switching, listEle, dir, listArr, tempListELe;
    list = document.getElementById("list");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        listEle = list.getElementsByTagName("LI");
        tempListELe = [...listEle]
        listArr = document.getElementsByClassName(sortTarget);
        let tempEle = [...listArr]
        let mapped = tempEle.map((el, i) => { return { index: i, value: el } })
        let orgArr = [...mapped]

        if (dir == "asc") {
            mapped.sort((x, y) => {
                if (sortTarget === "sortsize") {
                    if (covertSizeStringToBytes(x.value.innerHTML) > covertSizeStringToBytes(y.value.innerHTML)) { return 1; }
                    if (covertSizeStringToBytes(x.value.innerHTML) < covertSizeStringToBytes(y.value.innerHTML)) { return -1; }
                } else {
                    if (x.value.innerHTML > y.value.innerHTML) { return 1; }
                    if (x.value.innerHTML < y.value.innerHTML) { return -1; }
                }
                return 0;
            })
        } else if (dir == "desc") {
            mapped.sort((x, y) => {
                if (sortTarget === "sortsize") {
                    if (covertSizeStringToBytes(x.value.innerHTML) > covertSizeStringToBytes(y.value.innerHTML)) { return -1; }
                    if (covertSizeStringToBytes(x.value.innerHTML) < covertSizeStringToBytes(y.value.innerHTML)) { return 1; }
                } else {
                    if (x.value.innerHTML > y.value.innerHTML) { return -1; }
                    if (x.value.innerHTML < y.value.innerHTML) { return 1; }
                }

                return 0;
            })
        }


        if (_.isEqual(mapped, orgArr) && dir == "asc") {
            dir = "desc"
            switching = true
        } else {
            switching = false
            for (var i = 0; i < mapped.length; i++) {
                list.appendChild(tempListELe[mapped[i].index])
            }
        }
    }
}

/*Easter egg */
function printlogo() {
    var k = "\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMmmmmmmmmmmmmNMMMMMMMMMMMMMMNmmmmmmmmmmmMMMMMMMMMMMMmmmmmmmmmNMMMMMd::::::::::+MMMMM\nMMMMMMMMMMMMMMMMs````````````/MMMMMMMMMMMMMMd```````````+NMMMMMMMMMm`````````yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMMN`             yMMMMMMMMMMMMMh            :mMMMMMMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMM/              .NMMMMMMMMMMMMh             .dMMMMMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMd                oMMMMMMMMMMMMh              `yMMMMMMm         yMMMMMh----------/MMMMM\nMMMMMMMMMMMMMM-                `dMMMMMMMMMMMh                oNMMMMm         yMMMMMNmmmmmmmmmmmMMMMM\nMMMMMMMMMMMMMs        `         :MMMMMMMMMMMh                 :NMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMm`       +o          yMMMMMMMMMMh                  .dMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMM/       `NN.         `NMMMMMMMMMh        -.         `yMN         yMMMMMy          .MMMMM\nMMMMMMMMMMMh        oMMs          +MMMMMMMMMh         d`          sM.        yMMMMMy          .MMMMM\nMMMMMMMMMMM.       .NMMM.          dMMMMMMMMh         dm.          o/        yMMMMMy          .MMMMM\nMMMMMMMMMMo        yMMMMh          -MMMMMMMMh         dMm-          .        yMMMMMy          .MMMMM\nMMMMMMMMMm`        ::::::           sMMMMMMMh         dMMN/                  yMMMMMy          .MMMMM\nMMMMMMMMM:                          `mMMMMMMh         dMMMMo                 yMMMMMy          .MMMMM\nMMMMMMMMh                            /MMMMMMh         dMMMMMy`               yMMMMMy          .MMMMM\nMMMMMMMN.                             hMMMMMh         dMMMMMMd.              yMMMMMy          .MMMMM\nMMMMMMMo        `++++++++++.          .NMMMMh         dMMMMMMMm:             yMMMMMy          .MMMMM\nMMMMMMm`        yMMMMMMMMMMh           oMMMMh         dMMMMMMMMN+            yMMMMMy          .MMMMM\nMMMMMM:        :MMMMMMMMMMMM:          `dMMMh         dMMMMMMMMMMs`          yMMMMMy          .MMMMM\nMMMMMy         dMMMMMMMMMMMMm           :MMMh         dMMMMMMMMMMMh`         yMMMMMy          .MMMMM\nMMMMMdyyyyyyyyhMMMMMMMMMMMMMMhyyyyyyyyyyyNMMNyyyyyyyyyNMMMMMMMMMMMMmyyyyyyyyymMMMMMmyyyyyyyyyyhMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                            MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM      PowerBy: GoIndex      MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM      Theme Design: ANi     MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                            MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
    console.log(k);
}

/*Share Copy */
function copyURI(evt) {
    evt.preventDefault();
    /* clipboard successfully set */
    // navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
    //     /* clipboard successfully set */
    //     evt.target.innerHTML = `<i class="mdui-icon material-icons">done</i> Copied`
    //     setTimeout(()=> {
    //         evt.target.innerHTML = `<i class="mdui-icon material-icons">share</i> Share`
    //     }, 1500)
    // }, () => {
    //     /* clipboard write failed */
    //     evt.target.innerHTML = `<i class="mdui-icon material-icons">clear</i> Error`
    //     setTimeout(()=> {
    //         evt.target.innerHTML = `<i class="mdui-icon material-icons">share</i> Share`
    //     }, 1500)
    // });
    navigator.clipboard.writeText((evt.currentTarget || evt.target).getAttribute('href')).then(() => {
        /* clipboard successfully set */
        mdui.snackbar({
            message: '已複製連結 - Link Copied',
            position: 'right-top'
        });
    }, () => {
        /* clipboard write failed */
            mdui.snackbar({
            message: '複製連結失敗 - Link Copy failed',
            position: 'right-top'
        });
    });
}



$(function () {
    init();
    printlogo();
    // const Scrollbar = window.Scrollbar;
    // const overscroll = window.OverscrollPlugin;
    // Scrollbar.use(overscroll)
    // Scrollbar.init(document.querySelector('html'),
    //     {
    //         damping: 0.06,
    //         renderByPixels: true,
    //         plugins: {
    //             overscroll:
    //             {
    //                 effect: 'glow',
    //                 damping: 0.09,
    //                 glowColor: "rgba(0, 0, 0, 0.29)",
    //                 maxOverscroll: 1000
    //             }
    //         }
    //     }
    // );


    var path = window.location.pathname;
    $("body").on("click", '.folder', function () {
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    $("body").on("click", '.view', function () {
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    render(path);
});
