// import React from 'react';
import '../assets/css/Card.css';

import { Link } from 'react-router-dom';
import { Card , CardMedia , CardContent , CardActions , Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Carde = () => {
  return (
    <div className='main'>
        <div className="row">
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:380   }}>
                    <CardMedia sx={{ height: 220 }} image="https://lh3.googleusercontent.com/p/AF1QipOE2gwQk_VIrZ6hzm4tMgyqnhVmrrHAHP_QkNix=s1360-w1360-h1020" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKCET</Typography>
                        <Typography variant="body2" color="text.secondary">
                            SRI KRISHNA COLLEGE OF ENGINNERING AND TECHNOLOGY
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:380  }}>
                    <CardMedia sx={{ height: 220 }} image="https://www.srikrishna.ac.in/images/Slider/Slide2.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKCT</Typography>
                        <Typography variant="body2" color="text.secondary">
                           SRI KRISHNA COLLEGE OF TECHNOLOGY
                        </Typography>
                    </CardContent>
                    <br/>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:380  }}>
                    <CardMedia sx={{ height: 220 }} image="https://www.srikrishna.ac.in/images/gallery/18_img.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKASC</Typography>
                        <Typography variant="body2" color="text.secondary">
                            SRI KRISHNA ARTS AND SCIENCE COLLEGE
                        </Typography>
                    </CardContent>
                    <br/>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        </div>
  );
};

export default Carde;
