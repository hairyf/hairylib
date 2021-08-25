import 'tinymce'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/skins/content/default/content.css'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/noneditable'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/save'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/table'
import 'tinymce/plugins/template'

const options = {
  skin: false,
  content_css: false,
  language_url:
    'https://client-static-1254212114.cos.ap-guangzhou.myqcloud.com/script/tinymce_zh_CN.js',
  language: 'zh_CN',
  // 插件列表
  plugins: [
    // 高级列表 描点 自动链接 自动存稿 源码编辑 代码示例 颜色选择 右键菜单 文字方向 emoji标签 全屏编辑 分割线 图片
    'advlist anchor autolink autosave code codesample colorpicker contextmenu directionality fullscreen hr',
    // 图片工具 插入日期 超链接 列表 媒体 不间断空格 不可编辑 分页符 粘贴 浏览 打印 保存 查找替换
    'imagetools insertdatetime link lists nonbreaking noneditable pagebreak paste preview print save searchreplace',
    // 拼音查找 tab切入切出 表格 模板 文字颜色 快速排版 显示元素范围 显示不可见字符 字数统计 百度地图(保存出现异常)
    'spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
    // 媒体
    // 'media image bdmap'
  ],
  // 工具菜单列表
  toolbar: [
    // 查找替换 字体加粗 字体倾斜 下划线 删除线 左对齐 中间对齐 右对齐 减少缩进 增加缩进 引文区块 撤回 重做 清楚格式 下标 上标 源代码 代码块
    'searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote undo redo removeformat subscript superscript code codesample',
    // 水平分割线 项目符号 排序符号 插入链接 浏览窗口 描点 分页符 插入时间 表格 标签 文字颜色 背景颜色 全屏 百度地图
    'hr bullist numlist link charmap preview anchor pagebreak insertdatetime table forecolor backcolor fullscreen'
    // 媒体
    // 'media image bdmap'
  ],

  //只有这里配置的节点和属性，编辑器才支持，不符合的会自动过滤(下面是目前rich-text支持的所有节点和属性)
  valid_elements:
    'p[style|class],a[style|class],abbr[style|class],b[style|class],blockquote[style|class],br[style|class],code[style|class],col[style|class|span|width],colgroup[style|class|span|width],dd[style|class],del[style|class],div[style|class],dl[style|class],dt[style|class],em[style|class],fieldset[style|class],h1[style|class],h2[style|class],h3[style|class],h4[style|class],h5[style|class],h6[style|class],hr[style|class],i[style|class],img[style|class|alt|src|height|width],ins[style|class],label[style|class],legend[style|class],li[style|class],ol[style|class|start|type],p[style|class],q[style|class],span[style|class],strong[style|class],sub[style|class],sup[style|class],table[style|class|width],tbody[style|class],td[style|class|colspan|height|rowspan|width],tfoot[style|class],th[style|class|colspan|height|rowspan|width],thead[style|class],tr[style|class],ul[style|class]',
  //如果配置了这个，编辑器会自动抹掉节点的属性(如果要保留请设置为false)
  paste_as_text: true,
  plugin_preview_height: 670,
  plugin_preview_width: 370,
  //一个汉字算一个字符，为了统计相对准确
  // wordcount_countregex: /([\w\u2019\x27\-\u00C0-\u1FFF]+)|([^\x00-\xff])/g,
  //rich-text不支持html实体，所以我们得将实体转为字符
  entities:
    'nbsp,160,iexcl,161,cent,162,pound,163,curren,164,yen,165,brvbar,166,sect,167,uml,168,copy,169,ordf,170,' +
    'laquo,171,not,172,shy,173,reg,174,macr,175,deg,176,plusmn,177,sup2,178,sup3,179,acute,180,micro,181,para,182,' +
    'middot,183,cedil,184,sup1,185,ordm,186,raquo,187,frac14,188,frac12,189,frac34,190,iquest,191,Agrave,192,Aacute,193,' +
    'Acirc,194,Atilde,195,Auml,196,Aring,197,AElig,198,Ccedil,199,Egrave,200,Eacute,201,Ecirc,202,Euml,203,Igrave,204,' +
    'Iacute,205,Icirc,206,Iuml,207,ETH,208,Ntilde,209,Ograve,210,Oacute,211,Ocirc,212,Otilde,213,Ouml,214,times,215,' +
    'Oslash,216,Ugrave,217,Uacute,218,Ucirc,219,Uuml,220,Yacute,221,THORN,222,szlig,223,agrave,224,aacute,225,acirc,226,' +
    'atilde,227,auml,228,aring,229,aelig,230,ccedil,231,egrave,232,eacute,233,ecirc,234,euml,235,igrave,236,iacute,237,' +
    'icirc,238,iuml,239,eth,240,ntilde,241,ograve,242,oacute,243,ocirc,244,otilde,245,ouml,246,divide,247,oslash,248,' +
    'ugrave,249,uacute,250,ucirc,251,uuml,252,yacute,253,thorn,254,yuml,255,fnof,402,Alpha,913,Beta,914,Gamma,915,Delta,916,' +
    'Epsilon,917,Zeta,918,Eta,919,Theta,920,Iota,921,Kappa,922,Lambda,923,Mu,924,Nu,925,Xi,926,Omicron,927,Pi,928,Rho,929,' +
    'Sigma,931,Tau,932,Upsilon,933,Phi,934,Chi,935,Psi,936,Omega,937,alpha,945,beta,946,gamma,947,delta,948,epsilon,949,' +
    'zeta,950,eta,951,theta,952,iota,953,kappa,954,lambda,955,mu,956,nu,957,xi,958,omicron,959,pi,960,rho,961,sigmaf,962,' +
    'sigma,963,tau,964,upsilon,965,phi,966,chi,967,psi,968,omega,969,thetasym,977,upsih,978,piv,982,bull,8226,hellip,8230,' +
    'prime,8242,Prime,8243,oline,8254,frasl,8260,weierp,8472,image,8465,real,8476,trade,8482,alefsym,8501,larr,8592,uarr,8593,' +
    'rarr,8594,darr,8595,harr,8596,crarr,8629,lArr,8656,uArr,8657,rArr,8658,dArr,8659,hArr,8660,forall,8704,part,8706,exist,8707,' +
    'empty,8709,nabla,8711,isin,8712,notin,8713,ni,8715,prod,8719,sum,8721,minus,8722,lowast,8727,radic,8730,prop,8733,infin,8734,' +
    'ang,8736,and,8743,or,8744,cap,8745,cup,8746,int,8747,there4,8756,sim,8764,cong,8773,asymp,8776,ne,8800,equiv,8801,le,8804,ge,8805,' +
    'sub,8834,sup,8835,nsub,8836,sube,8838,supe,8839,oplus,8853,otimes,8855,perp,8869,sdot,8901,lceil,8968,rceil,8969,lfloor,8970,' +
    'rfloor,8971,lang,9001,rang,9002,loz,9674,spades,9824,clubs,9827,hearts,9829,diams,9830,OElig,338,oelig,339,Scaron,352,scaron,353,' +
    'Yuml,376,circ,710,tilde,732,ensp,8194,emsp,8195,thinsp,8201,zwnj,8204,zwj,8205,lrm,8206,rlm,8207,ndash,8211,mdash,8212,lsquo,8216,' +
    'rsquo,8217,sbquo,8218,ldquo,8220,rdquo,8221,bdquo,8222,dagger,8224,Dagger,8225,permil,8240,lsaquo,8249,rsaquo,8250,euro,8364,'
}

export default options
