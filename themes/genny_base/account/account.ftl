<#import "template.ftl" as layout>
<@layout.mainLayout active='account' bodyClass='user'; section>

    <div class="page-title">
        <h2>${msg("editAccountHtmlTitle")}</h2>
    </div>

    <hr/>
    
    <form action="${url.accountUrl}" class="input-detail" method="post">

        <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker?html}">

        <#-- <div class="subtitle">
            <span class="subtitle"><span class="required">*</span> ${msg("requiredFields")}</span>
        </div> -->

        <#if !realm.registrationEmailAsUsername>
            <div class="form-group ${messagesPerField.printIfExists('username','has-error')}">
                <div class="col-sm-2 col-md-2">
                    <label for="username" class="control-label">${msg("username")}</label> <#if realm.editUsernameAllowed><span class="required">*</span></#if>
                </div>

                <div class="col-sm-10 col-md-10">
                    <input type="text" class="form-control" id="username" name="username" <#if !realm.editUsernameAllowed>disabled="disabled"</#if> value="${(account.username!'')?html}"/>
                </div>
            </div>
        </#if>

        <div class="input-email ${messagesPerField.printIfExists('email','has-error')}">
            <input id="email" name="email" value="${(account.email!'')?html}" type="text" placeholder="email address" autofocus />
            <i id="input-email-icon" class="fa fa-fw fa-envelope" aria-hidden="true"></i>
        </div>

        <div class="input-firstname ${messagesPerField.printIfExists('firstName','has-error')}">
            <input type="text" id="firstName" name="firstName" value="${(account.firstName!'')?html}" placeholder="first name" />
            <i  id="input-firstname-icon" class="fa fa-fw fa-user" aria-hidden="true"></i>
        </div>

        <div class="input-lastname ${messagesPerField.printIfExists('lastName','has-error')}">
            <input type="text" name="lastName" id="lastName" value="${(account.lastName!'')?html}" placeholder="last name" />
            <i  id="input-lastname-icon" class="fa fa-fw fa-users" aria-hidden="true"></i>
        </div>


        <div id="kc-form-buttons" class=" submit">
            <div class="input-submit input-inline">
                <#if url.referrerURI??><a href="${url.referrerURI}">${msg("backToApplication")}</a></#if>
                <button type="submit" class="confirm" name="submitAction" value="Save">Save</button>
                <button type="submit" class="cancel" name="submitAction" value="Cancel">Cancel</button>
            </div>
        </div>

    </form>

</@layout.mainLayout>