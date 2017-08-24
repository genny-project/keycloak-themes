<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="${properties.kcHtmlClass!}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">
    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
            <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
        </#list>
    </#if>
    <title><#nested "title"></title>

    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#if properties.scripts?has_content>
        <#list properties.scripts?split(' ') as script>
            <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
        </#list>
    </#if>
    <#if scripts??>
        <#list scripts as script>
            <script src="${script}" type="text/javascript"></script>
        </#list>
    </#if>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>

<body class="${properties.kcBodyClass!}">

    <div id="kc-container" class="$">
        
        <#if realm.internationalizationEnabled>
            <div id="kc-locale" class="${properties.kcLocaleClass!}">
                <div id="kc-locale-wrapper" class="${properties.kcLocaleWrapperClass!}">
                    <div class="kc-dropdown" id="kc-locale-dropdown">
                        <a href="#" id="kc-current-locale-link">${locale.current}</a>
                        <ul>
                            <#list locale.supported as l>
                                <li class="kc-dropdown-item"><a href="${l.url}">${l.label}</a></li>
                            </#list>
                        </ul>
                    </div>
                </div>
            </div>
        </#if>

         <div id="kc-content" class="">

            <div id="kc-form" class="">
                
                <#if displayMessage && message?has_content>
                    <div class="alert alert-${message.type}">
                        <#if message.type = 'success'><i class="fa fa-check-circle" aria-hidden="true"></i></#if>
                        <#if message.type = 'warning'><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></#if>
                        <#if message.type = 'error'><i class="fa fa-exclamation-circle" aria-hidden="true"></i></#if>
                        <span class="kc-feedback-text">${message.summary}</span>
                    </div>
                </#if>

                <#nested "form">
               
            </div>

        </div>
            
    </div>
</body>
</html>
</#macro>
