EBot is an IRC bot written in node.js

Help/Commands :
!currency <amount> <from code> <to code> - Converts a certain amount from one currency to another
!echo <text> - Makes EBot say <text> (Aliases: !say)
!greet - Toggles whether or not EBot will greet users on channel join (True by default)
!help - Links to this help page
!mode <mode> - Starts an output modifier (See below for list of valid modes)
!quote - Displays quote at random from any user
!quote <username> - Displays random quote by <username>
!raw <command> - Executes <command> directly to the IRC connection

Modifiers (To be used with !mode) :
mor - Reverses all output text (Aliases: reverse, yougotmor)
1337 - Converts all output text to leetspeak (Aliases: leet, leetspeak)