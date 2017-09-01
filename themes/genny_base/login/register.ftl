<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo; section>
    <#if section = "title">
        <#-- ${msg("registerWithTitle",(realm.displayName!''))} -->
    <#elseif section = "header">
        <#-- ${msg("registerWithTitleHtml",(realm.displayNameHtml!''))} -->
    <#elseif section = "form">
        <form  action="${url.registrationAction}" method="post">
            
            <div class="login-container">
                
                <div class="project-title">
                    <div class="project-logo"></div>
                    <p>${properties.themeTitle!}</p>
                </div>

                <div class="title">CREATE YOUR ACCOUNT</div>

                <div class="input-detail">
                  
                    <#if !realm.registrationEmailAsUsername>

                        <div class="input-username">
                            <input type="text" name="username" id="username"  value="${(register.formData.username!'')?html}" placeholder="username" />
                            <i id="input-username-icon" class="fa fa-fw fa-user" aria-hidden="true"></i>
                        </div>

                    </#if>
                    
                    <div class="input-email">
                        <input type="text" name="email" id="email"  value="${(register.formData.email!'')?html}" placeholder="email" />
                        <i id="input-email-icon" class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                    </div>

                    <div class="input-firstname">
                        <input type="text" id="firstName" name="firstName" value="${(register.formData.firstName!'')?html}" placeholder="first name" />
                        <i  id="input-firstname-icon" class="fa fa-fw fa-user" aria-hidden="true"></i>
                    </div>
                    
                    <div class="input-lastname">
                        <input type="text" name="lastName" id="lastName" value="${(register.formData.lastName!'')?html}" placeholder="last name" />
                        <i  id="input-lastname-icon" class="fa fa-fw fa-users" aria-hidden="true"></i>
                    </div>
       

                    <#if passwordRequired>
                        <div class="input-password">
                            <input type="password" name="password" id="password" placeholder="password" />
                            <i  id="input-password-icon" class="fa fa-fw fa-unlock-alt" aria-hidden="true"></i>
                        </div>
                        <div class="input-password">
                            <input type="password" id="password-confirm"  name="password-confirm" placeholder="password-confirm" />
                            <i  id="input-password-confirm-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
                        </div>
                    </#if>
            
                    <div class="input-submit">
                        <button type="submit">Create Your Account</button>
                    </div>
                
                </div>
        
                <div class="link link-register">
                    <span class="login"><a href="${url.loginUrl}">Already have an account?</a></span>
                </div>

                <div class="social-login">
                    
                    <div class="social-login-title">OR SIGN UP WITH</div>
                    
                    <#if realm.password && social.providers??>
                        <div id="kc-social-providers">
                            <ul>
                                <#list social.providers as p>
                                    <li>
                                        <a href="${p.loginUrl}" class=" ${p.providerId}">
                                            <i class="fa fa-${p.providerId}" aria-hidden="true"></i>
                                            <span>${p.providerId}</span>
                                        </a>
                                    </li>
                                </#list>
                            </ul>
                        </div>
                    </#if>

                </div>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>