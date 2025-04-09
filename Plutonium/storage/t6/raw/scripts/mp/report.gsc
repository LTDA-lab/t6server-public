//Decompiled with SeriousHD-'s GSC Decompiler
init()
{
	level thread onplayerconnect();
	ui_dclink = newhudelem();
	ui_dclink.horzalign = "fullscreen";
	ui_dclink.alignx = "middle";
	ui_dclink.vertalign = "fullscreen";
	ui_dclink.aligny = "top";
	ui_dclink.foreground = 1;
	ui_dclink.alpha = 1;
	ui_dclink.color = (0.737, 0.737, 0.737);
	ui_dclink.x = 530;
	ui_dclink.y = 400;
	ui_dclink.font = "default";
	ui_dclink.fontscale = 1;
	ui_dclink settext( "!report player reason" );

}

onplayerconnect()
{
	for(;;)
	{
	level waittill( "connected", player );
	player thread onplayerspawned();
	}

}

onplayerspawned()
{
	self endon( "disconnect" );
	for(;;)
	{
	self waittill( "spawned_player" );
	}

}

