const CookieSeenSessionStorageKey = "CookieSeen";

function checkCookies(){
  if (WasCookieSeen()) {
      off();
  }
}

function WasCookieSeen(){
  const value = sessionStorage.getItem(CookieSeenSessionStorageKey);
  return value === "true";
}

function off(){
    const cookieOverlay = GetCookieOverlayElement();
    cookieOverlay.style.display = "none";
    SetCookieAsSeen();
  }

function GetCookieOverlayElement(){
  return document.getElementById('cookies');
}

function SetCookieAsSeen(){
  sessionStorage.setItem(CookieSeenSessionStorageKey, "true");
}
