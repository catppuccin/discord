<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://discord.com">Discord</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/discord/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/template?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/discord/issues"><img src="https://img.shields.io/github/issues/catppuccin/template?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/discord/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/template?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

| ![web](assets/web/preview.webp) | ![react-native](assets/react-native/preview.webp) | ![aliucord](assets/aliucord/preview.webp) |
| :-----------------------------: | :-------------------------------------: | :-----------------------------------: |
|           Desktop/Web           |               Enmity/Bunny              |               Aliucord                |

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/mocha.webp"/>
</details>

## Usage

- [Desktop or Web](https://github.com/catppuccin/discord/main/src/web)
- [Bunny or Enmity](https://github.com/catppuccin/discord/main/src/react-native)
- [Aliucord](https://github.com/catppuccin/discord/main/src/aliucord)

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

- [riichi](https://github.com/riivx)
- [Luz](https://github.com/luzikii)
- [Moodzz](https://github.com/Moodzz1)
- [Taki Shiwa](https://github.com/TakiShiwa)
- [1MMM10](https://github.com/1MMM10)

- [Skinatro](https://github.com/skinatro)
- [lemon](https://github.com/andreasgrafen)
- [Isabelinc](https://github.com/Isabelincorp)
- [WitherCubes](https://github.com/WitherCubes) 
- [myumichi](https://github.com/myumichi)
- and everyone else who made the original Discord PC. Enmity, Vendetta and Aliucord port!
&nbsp;

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
