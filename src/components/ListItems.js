/* import React from 'react';
import Item from './Item';

export const ListItem = ({ items }) => {
  return (
    <div className='d-flex flex-column bd-highlight mb-3'>
      {items.map((item) => (
        <div className='p-2 bd-highlight'>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ListItem;
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ListItems = ({ items }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <div className='d-flex flex-column bd-highlight mb-3'>
        {items.map((item) => (
          <div className='p-2 bd-highlight'>
            <Item item={item} />
          </div>
        ))}
      </div>
    </List>
  );
};

export default ListItems;
