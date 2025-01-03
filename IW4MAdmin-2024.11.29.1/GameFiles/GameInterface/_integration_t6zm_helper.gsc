Init()
{
    level.startmessagedefaultduration = 2;
    level.regulargamemessages = spawnstruct();
    level.regulargamemessages.waittime = 6;

    thread OnPlayerConnect();
}

OnPlayerConnect()
{
    for ( ;; )
    {
        level waittill( "connecting", player );
        player thread DisplayPopupsWaiter();
    }
}

DisplayPopupsWaiter()
{
    self endon( "disconnect" );
    self.ranknotifyqueue = [];

    if ( !IsDefined( self.pers[ "challengeNotifyQueue" ] ) )
    {
        self.pers[ "challengeNotifyQueue" ] = [];
    }
    if ( !IsDefined( self.pers[ "contractNotifyQueue" ] ) )
    {
        self.pers[ "contractNotifyQueue" ] = [];
    }

    self.messagenotifyqueue = [];
    self.startmessagenotifyqueue = [];
    self.wagernotifyqueue = [];

    while ( !level.gameended )
    {
        if ( self.startmessagenotifyqueue.size == 0 && self.messagenotifyqueue.size == 0 )
        {
            self waittill( "received award" );
        }

        waittillframeend;

        if ( level.gameended )
        {
            return;
        }
        else
        {
            if ( self.startmessagenotifyqueue.size > 0 )
            {
                nextnotifydata = self.startmessagenotifyqueue[ 0 ];
                arrayremoveindex( self.startmessagenotifyqueue, 0, 0 );
                if ( IsDefined( nextnotifydata.duration ) )
                {
                    duration = nextnotifydata.duration;
                }
                else
                {
                    duration = level.startmessagedefaultduration;
                }

                self maps\mp\gametypes_zm\_hud_message::shownotifymessage( nextnotifydata, duration );
                wait ( duration );

                continue;
            }
            else if ( self.messagenotifyqueue.size > 0 )
            {
                nextnotifydata = self.messagenotifyqueue[ 0 ];
                arrayremoveindex( self.messagenotifyqueue, 0, 0 );

                if ( IsDefined( nextnotifydata.duration ) )
                {
                    duration = nextnotifydata.duration;
                }
                else
                {
                    duration = level.regulargamemessages.waittime;
                }

                self maps\mp\gametypes_zm\_hud_message::shownotifymessage( nextnotifydata, duration );
                continue;
            }
            else
            {
                wait ( 1 );
            }
        }
    }
}
