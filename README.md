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

![Discord Theme Preview](assets/preview.webp)

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

### [BetterDiscord](https://betterdiscord.app)

1. Download your preferred flavour:

- 🌻 [Latte](./themes/latte.theme.css?raw=1)
- 🪴 [Frappe](./themes/frappe.theme.css?raw=1)
- 🌺 [Macchiato](./themes/macchiato.theme.css?raw=1)
- 🌿 [Mocha](./themes/mocha.theme.css?raw=1)

2. Copy the downloaded file to your BetterDiscord themes folder.
3. Enable the theme in BetterDiscord settings.

### Clients/Mods with custom CSS support

1. Simply add your preferred flavour into your discord clients CustomCSS file/editor.

```css
/* latte */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css");
/* frappe */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-frappe.theme.css");
/* macchiato */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-macchiato.theme.css");
/* mocha */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css");

/* You can also append Catppuccin colors to customize the accent, e.g. */
/* mocha (pink accent)*/
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha-pink.theme.css");
/* frappe (maroon accent) */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-frappe-maroon.theme.css");
```

### [Stylus](https://github.com/openstyles/stylus)

1. Enable CSP Patching from Stylus Settings > Advanced.
2. [Click here to install](https://github.com/catppuccin/discord/raw/main/discord.user.css).
3. Choose your preferred flavour and accent color from the Stylus preference dropdown.

## 🙋 FAQ

- Q: **_"Can this get my account banned?"_**
- A: Using third party clients and injecting custom css is against the ToS. While nobody has ever been banned for simply using discord client mods, We are not responsible for anything that might happen to your account by using third party clients. Use at your own discretion!

- Q: **_"Can I automatically switch flavors between light and dark mode?"_**
- A: The following snippet showcases a configuration that switches between latte in light mode and mocha in dark mode by adding an inline [`prefers-color-scheme` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), `(prefers-color-scheme: <light-or-dark>)`, after each `@import` statement (see ["Importing CSS rules conditional on media queries" - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)).

  ```css
  @import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css")
  (prefers-color-scheme: dark);
  @import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css")
  (prefers-color-scheme: light);
  ```

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
