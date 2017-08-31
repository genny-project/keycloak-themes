<#import "template.ftl" as layout>
<@layout.mainLayout active='sessions' bodyClass='sessions'; section>

    <div class="page-title">
        <h2>${msg("sessionsHtmlTitle")}</h2>
    </div>

    <hr/>

    <table class="table table-container">
        <thead class="table-header">
        <tr>
            <td>${msg("ip")}</td>
            <td>${msg("started")}</td>
            <td>${msg("lastAccess")}</td>
            <td>${msg("expires")}</td>
            <td>${msg("clients")}</td>
        </tr>
        </thead>

        <tbody class="table-body">
        <#list sessions.sessions as session>
            <tr>
                <td>${session.ipAddress}</td>
                <td>${session.started?datetime}</td>
                <td>${session.lastAccess?datetime}</td>
                <td>${session.expires?datetime}</td>
                <td>
                    <#list session.clients as client>
                        ${client}<br/>
                    </#list>
                </td>
            </tr>
        </#list>
        </tbody>

    </table>

    <div class="input-button">
        <a id="logout-all-sessions" class="cancel" href="${url.sessionsLogoutUrl}">${msg("doLogOutAllSessions")}</a>
    </div>


</@layout.mainLayout>
