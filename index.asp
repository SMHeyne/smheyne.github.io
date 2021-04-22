<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "smheyne.de" or host = "www.smheyne.de" then
response.redirect("https://www.smheyne.de/")

else
response.redirect("https://www.smheyne.de/error.htm")

end if
%>
