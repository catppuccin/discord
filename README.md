<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://discord.com/">Discord</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/discord/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/discord?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/discord/issues"><img src="https://img.shields.io/github/issues/catppuccin/discord?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/discord/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/discord?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
<img src="assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/mocha.webp"/>
</details>

## Usage

### Custom CSS ([Vencord](https://vencord.dev/), [BetterDiscord](https://betterdiscord.app/))

Add `@import url("https://catppuccin.github.io/discord/dist/catppuccin-<flavor>-<accent>.theme.css");` to your Discord client's custom CSS file/editor, where `<flavor` and `<accent>` are your preferred flavor and accent. Omit `-<accent>` to default to the blue accent color. For example:

```css
/* Mocha, with the default (blue) accent: */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css");

/* Mocha, with a custom pink accent: */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha-pink.theme.css");

/* Of course, you can do the same with any flavor and any accent - not just mocha or pink: */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css");
@import url("https://catppuccin.github.io/discord/dist/catppuccin-latte-blue.theme.css");
```

> [!TIP]
> You can also have Discord automatically switch themes depending on your system theme preference. The following snippet showcases a configuration that switches between latte in light mode and mocha in dark mode.
>
>  ```css
>  @import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css")
>  (prefers-color-scheme: dark);
>  @import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css")
>  (prefers-color-scheme: light);
>  ```

### [Stylus](https://github.com/openstyles/stylus) (Web)

1. Enable CSP Patching from Stylus Settings > Advanced.
2. Visit the following URL to bring up the Stylus install page for the Discord userstyle: https://github.com/catppuccin/discord/raw/main/discord.user.css.
3. Choose your preferred flavor and accent color from the Stylus preference dropdown.

## 🙋 FAQ

- Q: **_"Can this get my account banned?"_**
- A: Using third party clients and injecting custom css is against the ToS. While nobody has ever been banned for simply using discord client mods, We are not responsible for anything that might happen to your account by using third party clients. Use at your own discretion!

## 💝 Thanks to

- [GlowingUmbreon](https://github.com/glowingumbreon)
- [Isabelinc](https://github.com/Isabelincorp)
- [Ren](https://github.com/watatomo)
- [winston](https://github.com/nekowinston)
- [rubyowo](https://github.com/rubyowo)
- [Aven](https://github.com/ToxicAven)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&colorA=363a4f&colorB=b7bdf8"/></a></p>
