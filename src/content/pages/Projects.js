import React from 'react'
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


const Projects = (props) => {
    return (
        // Projects page
        <div className='projects'>
            <h1>Projects</h1>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle><h2><strong>AI Art Generator</strong></h2></CardTitle>
                        <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/7e1CWgY.png" alt="Example Art by AI Art Generator" />
                        <CardText className="card-text">I worked on a fully-remote, three person team to build an app for the creation of AI generated Art.  The artworks are generated using the technique of neural style transfer to generate a new image with the content of the content image, but in the style of the style image.</CardText>
                        <Button a href="https://github.com/mattjacobs93/ai-art-generator-front-end" target="_blank">GitHub Link For AI Art Generator</Button>
                        <br />
                        <Button a href="https://aiartgenerator.herokuapp.com/login" className="live-link" target="_blank">Live Link</Button>
                    </Card>
                </Col>
                <br />
                <Col sm="6">
                    <Card body>
                        <CardTitle><h2><strong>Social NFT</strong></h2></CardTitle>
                        <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/nZFokJM.png" alt="Social NFT" />
                        <CardText className="card-text">I worked on a fully-remote, three person team to build a MERN-stack Instagram clone centered around the posting, sharing, and minting of NFT artwork.  Users are able to create posts, like posts, comment on posts, and follow other users.  Additionally, users are able to mint their artwork with the click of a button as an NFT, with metadata stored using IPFS, and the IPFS URL stored on an Ethereum testnet via a deployed ERC-721 contract. </CardText>
                            <Button a href="https://github.com/mattjacobs93/social-nft-front-end" target="_blank">GitHub Link For Social NFT</Button>
                            <br />
                            <Button a href="https://social-nft.netlify.app/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                <Row />
                <br />
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle><h2><strong>Checkers</strong></h2></CardTitle>
                            <CardImg className="card-image" width="30%" height="30%" src="https://i.imgur.com/8CSLOFV.png" alt="Checkers" />
                            <CardText className="card-text">I programmed a browser-based game of checkers with AI.  The AI was developed using the minmax algorithm, and the implementation consists of three levels of difficulty that the user can play against.  Supported game play is user vs user, user vs AI, and AI vs AI</CardText>
                            <Button a href="https://github.com/mattjacobs93/checkers" target="_blank">GitHub Link For Checkers</Button>
                            <br />
                            <Button a href="http://www.checkersbymattjacobs.surge.sh/" className="live-link" target="_blank">Live Link</Button>
                        </Card>
                    </Col>
                    <br />
                </Row>
                <br />
            </Row>
        </div>
    )
}

export default Projects