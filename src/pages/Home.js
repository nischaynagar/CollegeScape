import React from "react";
import design from "../Components/HomeComponents/homeComponents.module.css";
import { styled } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import featureImg1 from '../Components/HomeComponents/images/feature-1.svg'
import teamIllustration from '../Components/HomeComponents/images/team-illu.svg'
import team1 from '../Components/HomeComponents/images/team-1.png'
import team2 from '../Components/HomeComponents/images/team-2.png'
import team3 from '../Components/HomeComponents/images/team-3.png'
import team4 from '../Components/HomeComponents/images/team-4.png'
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
    
    const ButtonStyle = {fontSize: "1.3vw", fontWeight: "bold", textTransform: "none", fontFamily: "Montserrat", borderRadius: "10px"};
  
  const LoginButton = styled(Button)({
    fontSize: "1.3vw",
    color: "black",
    fontWeight: "normal",
    textTransform: "none",
    fontFamily: "Montserrat",
    // transition: "all 0.9s ease-in-out",
    background: 'linear-gradient(180deg, rgba(255, 139, 139, 0.68) 0%, #B391FF 100%)',
    // border: 0,
    // borderRadius: 3,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.23)",
    borderRadius: "10px",
    height: 48,
    padding: '0 30px',
        "&:hover": {
        background: 'linear-gradient(180deg, rgba(255, 175, 175, 0.68) 0%, #CCB6FF 100%)'
        }
  });




  
  return (
    <div className={design.main}>

      <div className={design.NavContainer}>
            
        <div className={design.NavLogo}>CollegeScape</div>
        <Link className={design.NavButton1} style={ButtonStyle} activeClass="active" to="features" spy={true} smooth={true} duration={1000}>
        <Button className={design.NavButton1} style={ButtonStyle}>Features</Button>
</Link>


        
        
          
          <Link className={design.NavButton2} style={ButtonStyle} activeClass="active" to="team" spy={true} smooth={true} duration={1000}>
        <Button className={design.NavButton2} style={ButtonStyle}>Team</Button>
        </Link>
        <Link className={design.NavButton3} style={ButtonStyle} activeClass="active" to="team" spy={true} smooth={true} duration={1000}>
<Button className={design.NavButton3} style={ButtonStyle}>Contact Us</Button>
</Link>
        <Button className={design.NavSignUp} style={ButtonStyle}>Sign Up</Button>
        <LoginButton className={design.NavLogin}>Log In</LoginButton>
      </div>


      <div className={design.MobileNav}>
            
        <div className={design.MNavLogo}>CollegeScape</div>
        

        <div className={design.MobileNavMiddle}>
        <Link className={design.MNavButton1} style={ButtonStyle} activeClass="active" to="features" spy={true} smooth={true} duration={1000}>
        <Button className={design.MNavButton1} style={ButtonStyle}>Features</Button>
</Link>
          
          <Link className={design.MNavButton2} style={ButtonStyle} activeClass="active" to="team" spy={true} smooth={true} duration={1000}>
        <Button className={design.MNavButton2} style={ButtonStyle}>Team</Button>
        </Link>
        <Link className={design.MNavButton3} style={ButtonStyle} activeClass="active" to="team" spy={true} smooth={true} duration={1000}>
<Button className={design.MNavButton3} style={ButtonStyle}>Contact Us</Button>
</Link>

</div>
        
<div className={design.MobileNavEnd}>
        <Button className={design.MNavSignUp} style={ButtonStyle}>Sign Up</Button>
        <LoginButton className={design.MNavLogin}>Log In</LoginButton>
        </div>
      </div>


<div className={design.body}>
      <div className={design.FeaturesContainer} id="features">
        <h1 className={design.FeatureTitle}>University Management System</h1>
        <div className={design.Feature1}>
        <h2 className={design.FeatureSubtitle}>A One stop platform to manage academic affairs and student database!</h2>
        <p className={design.img__description}>This image looks super neat.</p>

        <img src={featureImg1} alt="feature 1 illustration" className={design.FeatureImage}/>
        </div>
      </div>

      <div className={design.TeamContainer} id="team">
        <div className={design.TeamTitleContainer}>
          <h1 className={design.TeamHeading}>Meet the <span className={design.TeamTeamHeadingBold}>Team</span></h1>
          <img src={teamIllustration} alt="team illustration" className={design.TeamIllustrationImage}/>
        </div>
        <div className={design.TeamInfoContainer}>
        
          <div>
          <div className={`${design.TeamMemberWrapper} ${design.TeamMemberWrapper1}`}>
            <img src={team1} alt="team member 1" className={`${design.TeamMember} ${design.TeamMember1}`}/>
          </div>

          <div className={`${design.TeamMemberWrapper} ${design.TeamMemberWrapper2}`}>
            <img src={team2} alt="team member 2" className={`${design.TeamMember} ${design.TeamMember2}`}/>
          </div>
          </div>

          <div>
          <div className={`${design.TeamMemberWrapper} ${design.TeamMemberWrapper3}`}>
            <img src={team3} alt="team member 3" className={`${design.TeamMember} ${design.TeamMember3}`}/>
          </div>

          <div className={`${design.TeamMemberWrapper} ${design.TeamMemberWrapper4}`}>
            <img src={team4} alt="team member 4" className={`${design.TeamMember} ${design.TeamMember4}`}/>
          </div> 
          </div>         
        </div>
      </div>
</div>
    </div>
  );
}

export default Home;
