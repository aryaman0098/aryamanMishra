import React from 'react'
import "./ProjectCard.css"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


function ProjectCard(props) {
    
  const codeSymbol = "</>"
  
  const { avatarSrc, title, description, imgSrc, codeUrl } = props;
    return (
        <Card className = "projectCard">
            <CardHeader
              avatar={
                <Avatar src = { avatarSrc } />
              }
              title= {title}
            />
            <CardMedia style = {{height: "150px"}} image = { imgSrc } />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className = "projectButton" size="small" href = {codeUrl} target = "_blank">
                  {codeSymbol}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard
