import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props {
  activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {
  return (
    <Segment.Group raised>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted By Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <span>
              <Icon name="clock" color="teal"/> {format(activity.date!, 'dd MMMM yyyy h:mm aa')}
            </span>
          </Grid.Column>
          <Grid.Column>
            <span>
              <Icon name="marker" color="orange"/> {activity.venue}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          content="View"
          floated="right"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
