var eligibilityInterview = function(gradScore, hscScore, sscScore, candidateName){
    var eligibilityResult = (gradScore >= 70 || hscScore >= 80 || sscScore > 90) ? `Congrats "${candidateName}" you are eligible for TCS interview.` : `Sorry "${candidateName}" Unfortunately you are not eligible for TCS interview.`;
    console.log(`${eligibilityResult}`);    
}
eligibilityInterview(80, 86, 90, "Shubha");
eligibilityInterview(70, 65, 55, "Mohini");
eligibilityInterview(60, 79, 88, "Nil");

