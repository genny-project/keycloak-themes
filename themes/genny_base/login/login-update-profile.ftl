<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "title">
        ${msg("loginProfileTitle")}
    <#elseif section = "header">
        ${msg("loginProfileTitle")}
    <#elseif section = "form">
        <form id="kc-update-profile-form" action="${url.loginAction}" method="post">

            <div class="login-container">

                <div class="project-title">
                    <div class="project-logo"></div>
                    <p>${properties.themeTitle!}</p>
                </div>

                <div class="title">UPDATE PROFILE</div>

                 <div class="input-detail">

                    <#if user.editUsernameAllowed>
                         <div class="input-username">
                            <input type="text" name="username" id="username"  value="${(user.username!'')?html}" placeholder="${msg("username")}" />
                            <i id="input-username-icon" class="fa fa-fw fa-user" aria-hidden="true"></i>
                        </div>
                    </#if>

                    <div class="input-email">
                        <input type="text" name="email" id="email"  value="${(user.email!'')?html}" placeholder="${msg("email")}" />
                        <i id="input-email-icon" class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                    </div>

                    <div class="input-firstname">
                        <input type="text" id="firstName" name="firstName" value="${(user.firstName!'')?html}" placeholder="${msg("firstName")}" />
                        <i  id="input-firstname-icon" class="fa fa-fw fa-user" aria-hidden="true"></i>
                    </div>
                    
                    <div class="input-lastname">
                        <input type="text" name="lastName" id="lastName" value="${(user.lastName!'')?html}" placeholder="${msg("lastName")}" />
                        <i  id="input-lastname-icon" class="fa fa-fw fa-users" aria-hidden="true"></i>
                    </div>


                    <div class="input-submit">
                        <input type="submit" class="confirm" value="${msg("doSubmit")}"/>
                    </div>

                </div>

            </div>

        </form>
    </#if>
</@layout.registrationLayout>