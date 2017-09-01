<#import "template.ftl" as layout>
<@layout.mainLayout active='password' bodyClass='password'; section>

    <div class="page-title">
        <h2>${msg("changePasswordHtmlTitle")}</h2>
    </div>

    <hr/>

    <form action="${url.passwordUrl}" class="input-detail" method="post">
        <input type="text" readonly value="this is not a login form" style="display: none;">
        <input type="password" readonly value="this is not a login form" style="display: none;">

        <#if password.passwordSet>
            <div class="input-password">
                <input type="password" name="password" id="password" autocomplete="off" autofocus placeholder="password" />
                <i id="input-password-icon" class="fa fa-fw fa-unlock-alt" aria-hidden="true"></i>
            </div>
        </#if>

        <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker?html}">

        <div class="input-password">
            <input type="password" name="password-new" id="password-new" autocomplete="off" placeholder="new password" />
            <i  id="input-password-new-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
        </div>

        <div class="input-password">
            <input type="password" name="password-confirm" id="password-confirm" autocomplete="off" placeholder="confirm password" />
            <i  id="input-password-confirm-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
        </div>

        <div id="kc-form-buttons" class=" submit">
            <div class="input-submit input-inline">
                <button type="submit" class="confirm" name="submitAction" value="Save">${msg("doSave")}</button>
            </div>
        </div>


    </form>

</@layout.mainLayout>