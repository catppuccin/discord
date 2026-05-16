<h3 align="center">
	Kanagawa for <a href="https://discord.com/">Discord</a>
</h3>

Kanagawa Discord is a Discord theme based on the shared CSS structure from
Catppuccin Discord, with the palette layer replaced by two Kanagawa variants:
Wave and Dragon.

## Variants

- [Wave](./themes/wave.theme.css?raw=1)
- [Dragon](./themes/dragon.theme.css?raw=1)

## Usage

### [BetterDiscord](https://betterdiscord.app)

1. Download your preferred variant:

- [Wave](./themes/wave.theme.css?raw=1)
- [Dragon](./themes/dragon.theme.css?raw=1)

2. Copy the downloaded file to your BetterDiscord themes folder.
3. Enable the theme in BetterDiscord settings.

### Clients/Mods with Custom CSS Support

Add your preferred variant into your Discord client's Custom CSS file/editor.

```css
/* Wave */
@import url("https://vokinn.github.io/kanagawa-discord/dist/kanagawa-wave.theme.css");

/* Dragon */
@import url("https://vokinn.github.io/kanagawa-discord/dist/kanagawa-dragon.theme.css");
```

### [Stylus](https://github.com/openstyles/stylus)

1. Enable CSP Patching from Stylus Settings > Advanced.
2. Install the userstyle from `discord.user.css`.
3. Choose Wave or Dragon from the Stylus theme dropdown.

## FAQ

- Q: **_"Can this get my account banned?"_**
- A: Using third-party clients and injecting custom CSS is against the ToS. While nobody has ever been banned for simply using Discord client mods, this project is not responsible for anything that might happen to your account by using third-party clients. Use at your own discretion.

- Q: **_"Can I disable Rainbow Threads?"_**
- A: Yes, by placing the following in your QuickCSS threads will use the normal channel color.

  ```css
  :root {
    --kanagawa-rainbow-thread-disabled: ;
  }
  ```

## Credits

- Palette colors are based on [rebelot/kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim).
- Theme structure is derived from [catppuccin/discord](https://github.com/catppuccin/discord).
