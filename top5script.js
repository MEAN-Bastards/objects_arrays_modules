var twoBoxes = document.getElementsByClassName("bigbox");

window.onload = function  (){
    
twoBoxes[0].style.backgroundColor = "black";
twoBoxes[1].style.backgroundColor = "black";
twoBoxes[0].innerHTML = "";
twoBoxes[1].innerHTML = "";

};

// interactive console data table //
var PFPconsole = [
{
    buttonLabel: "Wing Chun",
    textContent: "The idea at the foundation of this metaphysical world view is everything in creation is the result of the recursive application of a fractal pattern. The elements of that fractal being Consciousness, Force, and Form. All the complexity of the universe is rooted in the repeated expression of this very simple pattern. Fueled by consciousness simple forces and forms interact and combine to form progressively more complex forces and forms. For the purpose of clarification we will need to re-define the terms force, form , and consciousness. For those definitions please click the button labeled First-Triad,but before you do that please watch the wonderful video to the right on fractals",
    videoContent: "https://www.youtube.com/embed/xLgaoorsi9U?rel=0"
},
{
    buttonLabel: "Thai Boxing",
    textContent: "The First-Triad is The Prime Fractal,it is the highest level of reality and can only be experienced directly via meditation. It is the realm of infinite possibility,as all things are possible, based on choice we choose what is probable, and then eventually what is actual. As stated in The Kybalion the true nature of reality is MENTAL, that is what is represented by the First-Triad, it is the root level of reality, what we experience in our normal everday lives consist of the trunk and branches. This is in no way to suggest that we can somehow impose our will on objective reality,i.e. forcing something to happen by merely wishing it to happen. However through training and application of the practical aspects of PFP we can definitely increase our levels of personal effectiveness. It is my opinion that the Morphic Field Theory proposed by Rupert Sheldrake gives us some insight into the nature of the First-Triad level of reality. The First Triad consist of Consciousness,Force, and Form. Consciousness is a mirror reflecting back on itself and through that reflection it refines itself. What rises out of this reflective process are force and form. Forces being dynamic expressions of consciousness and forms being static expressions of consciousness. Even these descriptions are not satisfactory as forms can be dynamic and forces can be static. Overall what is most important to remember is that we are speaking of one thing , THE ONE THING, and how this thing in reflecting on itself expresses itself in infinite ways. Consciousness is what gives force to form,and form to force,creating an infinite interacting fractal tapestry of forces and forms.",
    videoContent: "https://www.youtube.com/embed/9bm8RrkIHgQ?rel=0"
}, 
{
    buttonLabel: "Silat",
    textContent: "Consciousness is the root of reality, eternal being reflecting on eternal being. It is all that ever was, all that is, and all that shall be.It is beyond our ability to comprehend fully in any sort of intellectual capacity. However, as spiritual sages have expressed through the ages, it is possible to inwardly know the nature of reality through meditation. Through meditation we have the opportunity to experience ourselves as simply being, which is the nature of consciousness. As the Kybalion states as it is above,so it is below. At our core we are individualized units of consciousness,the self experiencing the SELF. In addition the reflective and fractal qualities of consciousness generate net works of individualized units of consciousness with it's associated forces/forms each connected to every other individualized unit of consciousness. By examining the world we learn about ourselves,by examining ourselves we learn about the nature of the universe. It would make sense that in analyzing the universe mathematically we would find the same type of mathematics that describes a network of interconnected nodes. ",
    videoContent:"https://www.youtube.com/embed/bp4NkItgf0E"
}, 
{
    buttonLabel: "Ju-Jitsu",
    textContent: "Force is the animating active quality of consciousness,force can be simple or complex,forces can exist as laws e.g.the laws of physics.Again you have to remember we are not using the term in it's every day sense although it is inclusive of the everday use of the term. At the first triad level we see the 'why' of Force, at the second triad level we see the 'How' of force. At the the third triad level we experience the result of these upper level forces and forms and grow as we seek to understand our experience of them.",
    videoContent: "https://www.youtube.com/embed/NYVMlmL0BPQ?rel=0"
}, 
{
    buttonLabel: "Krav Maga",
    textContent: "Form is the static quality of consciousness, form is information, structural, procedural,logical, Form tells force how to behave,both force and form are active qualities of consciousness. We see aspects of form in solid objects and their behavior as described by Newtonian physics, both the objects and the the laws that govern them are Forms. The active and dynamic qualities of the objects as they follow these laws is Force. Modern science deals primarily with Form, the behavior of physical objects at the Second Triad level. The Second Triad is the realm of 'How' the first triad is the realm of 'Why'. There was a time in human history when spirituality and the physical sciences where two parts of one holistic discipline that we will call esoteric science. There are a variety of reasons why esoteric science split into two lesser forms of study but we will save that discussion for another time.",
    videoContent: "https://www.youtube.com/embed/p5QXZ0__8VU?rel=0"
}
];

// Interactive console engine //
function getClickCallback(i){return function(){
	//change content in text window when button is clicked//
	document.getElementById("textWidgetContent").innerHTML = PFPconsole[i].textContent;
	//change content in video window when button is clicked//
	document.getElementById("video-content").setAttribute("src",PFPconsole[i].videoContent); 
}

}
for (i=0;i<14;i++){
	document.getElementById(PFPconsole[i].buttonLabel).onclick = getClickCallback(i);
}