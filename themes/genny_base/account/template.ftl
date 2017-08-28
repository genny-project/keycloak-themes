<#macro mainLayout active bodyClass>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">

    <title>${msg("accountManagementTitle")}</title>
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico">
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#if properties.scripts?has_content>
        <#list properties.scripts?split(' ') as script>
            <script type="text/javascript" src="${url.resourcesPath}/${script}"></script>
        </#list>
    </#if>
</head>
<body>

    <div class="${bodyClass}">

        <nav class="navbar navbar-main" role="navigation">

            <div class="nav-content">
                <div class="navbar-header">
                    <div class="project-logo"></div>
                    <h1 class="navbar-title">WELCOME TO ${properties.themeTitle!}</h1>
                </div>

                <div class="navbar-collapse">
                    <ul class="nav navbar-nav navbar-utility">
                        <#if realm.internationalizationEnabled>
                            <li>
                                <div class="kc-dropdown" id="kc-locale-dropdown">
                                    <a href="#" id="kc-current-locale-link">${locale.current}</a>
                                    <ul>
                                        <#list locale.supported as l>
                                            <li class="kc-dropdown-item"><a href="${l.url}">${l.label}</a></li>
                                        </#list>
                                    </ul>
                                </div>
                            <li>
                        </#if>
                        <#if referrer?has_content && referrer.url?has_content><li><a href="${referrer.url}" id="referrer">${msg("backTo",referrer.name)}</a></li></#if>
                        <li><a href="${url.logoutUrl}">${msg("doSignOut")}</a></li>
                    </ul>
                </div>

            </div>

        </nav>

        <div class="container body">

            <div class="bs-sidebar">

                <ul>
                    <li class="<#if active=='account'>active</#if>"><a href="${url.accountUrl}">${msg("account")}</a></li>
                    <#if features.passwordUpdateSupported><li class="<#if active=='password'>active</#if>"><a href="${url.passwordUrl}">${msg("password")}</a></li></#if>
                    <li class="<#if active=='totp'>active</#if>"><a href="${url.totpUrl}">${msg("authenticator")}</a></li>
                    <#if features.identityFederation><li class="<#if active=='social'>active</#if>"><a href="${url.socialUrl}">${msg("federatedIdentity")}</a></li></#if>
                    <li class="<#if active=='sessions'>active</#if>"><a href="${url.sessionsUrl}">${msg("sessions")}</a></li>
                    <li class="<#if active=='applications'>active</#if>"><a href="${url.applicationsUrl}">${msg("applications")}</a></li>
                    <#if features.log><li class="<#if active=='log'>active</#if>"><a href="${url.logUrl}">${msg("log")}</a></li></#if>
                </ul>

            </div>

            <div class="content-area">

                <#if message?has_content>
                    <div class="alert alert-${message.type}">
                        <#if message.type=='success' ><span class="pficon pficon-ok"></span></#if>
                        <#if message.type=='error' ><span class="pficon pficon-error-octagon"></span><span class="pficon pficon-error-exclamation"></span></#if>
                        ${message.summary}
                    </div>
                </#if>

                <#nested "content">

            </div>

        </div>

    </div>

</body>
</html>
</#macro>