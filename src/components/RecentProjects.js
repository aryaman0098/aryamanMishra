import React from 'react'
import "./RecentProjects.css"
import { Grid } from "@material-ui/core"
import ProjectCard from './ProjectCard'
import projectList from './projectList';

function RecentProjects() {

    const getProjects = (projectListObj) => {
        const { avatarSrc, title, description, imgSrc } = projectListObj
        return(
            <Grid item xs = {12} sm = {6} md = {4}>
                <ProjectCard { ...projectListObj } />
            </Grid>
        ); 
    }

    return (    
        <div className = "recentProjects_page">
            <h2 className="title">Projects</h2>
            <div className="project_cards_stye">
                <Grid container direction = "column">
                    <Grid item container>
                            <Grid container spacing = {4}>
                                {projectList.map(projectListObj => getProjects(projectListObj))}
                            </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default RecentProjects
