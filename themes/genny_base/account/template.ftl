<#macro mainLayout active bodyClass>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">
    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
            <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
        </#list>
    </#if>
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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>

    <div class="${bodyClass}">

        <nav class="header" role="navigation">

            <div class="header-content width-contain">
                <div class="header-title">
                    <i id="header-menu-icon" class="fa fa-bars" aria-hidden="true"></i>
                    <div class="project-logo"></div>
                    <#if !properties.hideTitle?? >
                        <h1 class="project-title">${properties.themeTitle!}</h1>
                    </#if>
                    
                </div>

                <div class="navbar-collapse">
                    <ul class="header-menu">

                        <#if realm.internationalizationEnabled>
                            <div id="kc-locale"">
                                <div id="kc-locale-wrapper">
                                    <div class="kc-dropdown" id="kc-locale-dropdown">
                                        <div class="kc-current-item">
                                            <i class="${msg("flag")}"></i>
                                            <p id="kc-current-locale-link">${locale.current}</p>
                                        </div>
                                        <ul>
                                            <#list locale.supported as l>
                                                <li class="kc-dropdown-item ${l.url} ${msg("flag")}">
                                                    <i class="${l.url}"></i>
                                                    <a href="${l.url}">${l.label}</a>
                                                </li>
                                            </#list>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </#if>

                        <#if referrer?has_content && referrer.url?has_content><li><a href="${referrer.url}" id="referrer">Back to ${referrer.name}</a></li></#if>
                        
                        <li><a href="${url.logoutUrl}">${msg("doSignOut")}</a></li>
                    </ul>
                </div>

            </div>



        </nav>

        <div class="body-content width-contain">

            <div id="sidebar" class="sidebar">

                <ul>
                    <li class="<#if active=='account'>active</#if>">
                        <a href="${url.accountUrl}">${msg("account")}</a>
                        <i id="" class="fa fa-fw fa-user" aria-hidden="true"></i>
                    </li>
                    
                    <#if features.passwordUpdateSupported>
                        <li class="<#if active=='password'>active</#if>">
                            <a href="${url.passwordUrl}">${msg("password")}</a>
                            <i id="" class="fa fa-fw fa-lock" aria-hidden="true"></i>
                        </li>
                    </#if>
                    
                    <li class="<#if active=='totp'>active</#if>">
                        <a href="${url.totpUrl}">${msg("authenticator")}</a>
                        <i id="" class="fa fa-fw fa-qrcode" aria-hidden="true"></i>
                    </li>
                    
                    <#if features.identityFederation>
                        <li class="<#if active=='social'>active</#if>">
                            <a href="${url.socialUrl}">${msg("federatedIdentity")}</a>
                            <i id="" class="fa fa-fw fa-id-card-o" aria-hidden="true"></i>
                        </li>
                    </#if>
                    
                    <li class="<#if active=='sessions'>active</#if>">
                        <a href="${url.sessionsUrl}">${msg("sessions")}</a>
                        <i id="" class="fa fa-fw fa-desktop" aria-hidden="true"></i>
                    </li>
                    
                    <li class="<#if active=='applications'>active</#if>">
                        <a href="${url.applicationsUrl}">${msg("applications")}</a>
                        <i id="" class="fa fa-fw fa-list-alt" aria-hidden="true"></i>
                    </li>
                    
                    <#if features.log>
                        <li class="<#if active=='log'>active</#if>">
                            <a href="${url.logUrl}">${msg("log")}</a>
                        </li>
                    </#if>
                </ul>

            </div>

            <div class="main-content">

                <#if message?has_content>
                    <div class="alert alert-${message.type}">
                        <#if message.type = 'success'><i class="fa fa-check-circle" aria-hidden="true"></i></#if>
                        <#if message.type = 'warning'><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></#if>
                        <#if message.type = 'error'><i class="fa fa-exclamation-circle" aria-hidden="true"></i></#if>
                        ${message.summary}
                    </div>
                </#if>

                <#nested "content">

            </div>

        </div>

    </div>

    <script type="text/javascript">
            $("#header-menu-icon").click(function(){

                if ($("#sidebar").is(":visible") ){
                    $("#sidebar").hide();
                } else {
                    $("#sidebar").show();
                }
            });
    </script>


</body>
</html>
</#macro>
