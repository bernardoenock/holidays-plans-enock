import { Divider, List, ListSubheader } from "@mui/material";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ItemMenu from "../atoms/ItemMenu";

const openLink = (link: string) => {
  window.open(link, '_blank');
};

export default function ListMenu() {
  return (
    <List component="nav">
      <ItemMenu iconMUI={<EditCalendarIcon />} label="Create"/>
      <ItemMenu iconMUI={<CalendarMonthIcon />} label="Read"/>
      <ItemMenu iconMUI={<EditNoteIcon />} label="Update"/>
      <ItemMenu iconMUI={<DeleteSweepIcon />} label="Delete"/>
      <Divider sx={{ my: 1 }} />
      <ListSubheader component="div" inset>
        My links
      </ListSubheader>
      <ItemMenu iconMUI={<LinkedInIcon />} label="LinkedIn" onClick={() => openLink('https://www.linkedin.com/in/bernardoenock/')}/>
      <ItemMenu iconMUI={<GitHubIcon />} label="Github" onClick={() => openLink('https://github.com/bernardoenock/holidays-plans-enock?tab=readme-ov-file#holidays-plans-enock')}/>
    </List>
  )
}