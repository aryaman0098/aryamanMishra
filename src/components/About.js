import React from 'react'
import "./About.css"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function About() {
    

    return (
        <div className="about_page">
            <div className = "main_body_about">
                <h2 className="title">About me</h2>
                <br />
                <p style = {{paddingLeft : 15}}>Hi! I am Aryaman Mishra. I live in Chandigarh. Going a little back, I was born in a small town called Rewa, Madhya Pradesh. Immediately after that, my parents went to live in Shillong, Meghalaya, a beautiful city amongst hills. I undertook my primary education in this city. Staying there, I got the oppurtunity to visit many towns and villages in the seven sister states in the North East. After staying in Shillong for 11 years, I moved to DehraDun, Uttarakhand, an amazing valley surrounded by Himalayan mountains. I made a lot of friends in the years I spent in DehradDun, enjoyed my school life and travelled the nooks and corner of this exquisite state. 
                    Completing my 10th from DehraDun, I moved on to Hyderbad, Telangana, were I was mainly focussed on my preparation for the draconian JEE examination. I was able to clear it and got admission into Indian Institute of Technology, Jammu, where I presently study. I had the time of my life here at my college, until COVID-19 broke out and like everyone, I am stuck at home, till date :/</p>
            </div>
            <br />
            <div className="work_experience">
                <h2 className="title">Work Experience</h2>
                <Timeline align = "alternate">
                <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4  style = {{color : "#EDEDED"}}>Software Engineer Intern, Optum Global Solutions</h4>
                            <p style = {{fontSize:12,  padding : 8, color : "gray"}}>May '21 - July '21</p>
                            <p style = {{color : "gray"}}>Worked on the migration of APIs form Openshift Container Platform to K8 Kubernetes and the automation of this process</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <br />
            <div className="education">
                <h2 className="title">Education</h2>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Indian Institute of Technology, Jammu ('18-present)</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sri Chaitanya Junior Kalasala, Hyderabad ('15-'18)</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Brightlands School, DehraDun ('09-'15)</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>St. Edmund's School, Shillong ('05-'09)</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default About
