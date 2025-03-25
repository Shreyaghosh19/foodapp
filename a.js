AOS.init({
    duration: 1000,
    once: false

})

function fun() {
    let p1 =document.getElementById("p1")
    let p2 =document.getElementById("p2")
    let p3 =document.getElementById("p3")
    let p4 =document.getElementById("p4")
    let p5 =document.getElementById("p5")
    let p6 =document.getElementById("p6")

    let total = Number(p1.value) + Number(p2.value) + Number(p6.value) + Number(p3.value) + Number(p4.value) + Number(p5.value)
    let t_a = (Number(p1.value) * 50)+ (Number(p2.value)*100) + (Number(p6.value)*150) + (Number(p3.value)*250) + (Number(p4.value)*150) + (Number(p5.value)*150)
    alert("Total order Quantity: "+total+"\nTotal amount:"+t_a)
}