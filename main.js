const form = document.querySelector(".formx");
const input = document.querySelector("input")
form.addEventListener("submit",(event)=>{
	event.preventDefault()
	const UserInputValue = input.value;
	piyas(UserInputValue)
})
const hero = async (url)=>{
	const data = await fetch(url);
	if(!data.ok){
		const mess = "Here ia a problem in hero section";
		throw new Error (mess);
	}else{
		return data.json();
	}
}
const piyas =(UserInputValue)=>{
	hero(`http://api.weatherapi.com/v1/current.json?key=cbc83ec79bba4512901201847232002&q=${UserInputValue}&aqi=no`).
	then((res)=>{
		console.log(res)
		document.querySelector(".celc").innerHTML=res.current.temp_c+"°c";
		document.querySelector(".condition").innerHTML=res.current.condition.text;
		document.querySelector(".country").innerHTML=res.location.country;
		document.querySelector(".rez").innerHTML=res.location.tz_id;
		document.querySelector(".city").innerHTML=res.location.name;
		document.querySelector(".humidity span").innerHTML=res.current.humidity+"%";
		document.querySelector(".visiblity span").innerHTML=res.current.vis_km+"km";
		document.querySelector(".wind span").innerHTML=res.current.wind_kph+"km/h";
		document.querySelector("#imag").src=res.current.condition.icon;
	}).
	catch((err)=>{
		console.log(err)
	})
}
// -----------------------------menu-----------------------------------
const menuIcon = document.querySelector(".menu");
const menudiv = document.querySelector(".menu-det");
let c=0;
menuIcon.addEventListener("click",(event)=>{
		menudiv.style.display="block";
		document.querySelector(".dev-det").style.display="none";
		document.querySelector(".ref-det").style.display="none";
		document.querySelector(".brownfox-logo").style.display="block";
		document.querySelector(".crossimg").addEventListener("click",()=>{
			menudiv.style.display="none";
		})
		document.querySelector(".dev-details").addEventListener("click",()=>{
			document.querySelector(".brownfox-logo").style.display="none";
			document.querySelector(".dev-det").style.display="block";
			document.querySelector(".ref-det").style.display="none";
		})
		document.querySelector(".references").addEventListener("click",()=>{
			document.querySelector(".brownfox-logo").style.display="none";
			document.querySelector(".dev-det").style.display="none";
			document.querySelector(".ref-det").style.display="block";
		})
})



