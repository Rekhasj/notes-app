import {ListCard, Heading, NotesDetails} from './styledComponents'

const NoteItem = prop => {
  const {listDetails} = prop
  const {title, note} = listDetails

  return (
    <ListCard>
      <Heading>{title}</Heading>
      <NotesDetails>{note}</NotesDetails>
    </ListCard>
  )
}

export default NoteItem
