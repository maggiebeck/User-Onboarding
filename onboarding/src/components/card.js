import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

 const CardContent = props => {
    console.log(props)
    return (
        <Segment>
            <Card>
                <Card.Content>
                    <h1>User</h1>
                    <Card.Header>
                        Name: {props.data.name}
                    </Card.Header>
                    <Card.Meta>
                        Email: {props.data.email}
                    </Card.Meta>
                    <Card.Meta>
                        Checkbox Agreement: {props.data.checkbox.toString()}
                    </Card.Meta>
                    
                </Card.Content>
            </Card>
        </Segment>
    )
}

 export default CardContent 