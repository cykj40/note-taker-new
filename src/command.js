import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
 .command('new <note>', 'Create a new note', yargs => {
    return yargs.positional('note', {
        type: 'string',
        description: 'The note to add'
    });
 }, (argv) => {
    console.log(`Adding note: ${argv.note}`);
 })

.option('tags', {
    alias: 't',
    type: 'string',
    description: 'Add tags to the note'
})
.command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    
  })


  .command('clean', 'remove all notes', () => {}, async (argv) => {
    
  })

.demandCommand(1)
.parse();