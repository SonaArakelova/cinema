import React from 'react';


const countryFlags = {
    "United States": "🇺🇸",
    Canada: "🇨🇦",
    "United Kingdom": "🇬🇧",
    Germany: "🇩🇪",
    France: "🇫🇷",
    Italy: "🇮🇹",
    Spain: "🇪🇸",
    Japan: "🇯🇵",
    China: "🇨🇳",
    India: "🇮🇳",
    Brazil: "🇧🇷",
    Australia: "🇦🇺",
    Mexico: "🇲🇽",
    SouthAfrica: "🇿🇦",
    Russia: "🇷🇺",
    Argentina: "🇦🇷",
    SouthKorea: "🇰🇷",
    Turkey: "🇹🇷",
    Netherlands: "🇳🇱",
    Sweden: "🇸🇪",
    Switzerland: "🇨🇭",
    Norway: "🇳🇴",
    Denmark: "🇩🇰",
    Finland: "🇫🇮",
    Portugal: "🇵🇹",
    Greece: "🇬🇷",
    SaudiArabia: "🇸🇦",
    UAE: "🇦🇪",
    Israel: "🇮🇱",
    Egypt: "🇪🇬",
    Indonesia: "🇮🇩",
    Thailand: "🇹🇭",
    Vietnam: "🇻🇳",
    Philippines: "🇵🇭",
    Malaysia: "🇲🇾",
    Singapore: "🇸🇬",
    NewZealand: "🇳🇿",
    Nigeria: "🇳🇬",
    Kenya: "🇰🇪",
    Colombia: "🇨🇴",
    Chile: "🇨🇱",
    Peru: "🇵🇪",
    Ukraine: "🇺🇦",
    Poland: "🇵🇱",
    Belgium: "🇧🇪",
    Austria: "🇦🇹",
    CzechRepublic: "🇨🇿",
    Romania: "🇷🇴",
    Hungary: "🇭🇺",
    Slovakia: "🇸🇰",
    Pakistan: "🇵🇰",
    Bangladesh: "🇧🇩",
    Iran: "🇮🇷",
  };
  
  export const Flag = ({ country }) => {
    console.log(country);
  
    return (
      <span>
        {countryFlags[country] ? countryFlags[country] + " " : country + ","}
      </span>
    );
  };