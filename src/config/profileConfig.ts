import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/kai_lu.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Fishing_MZ",
	bio: "Ciallo～ (∠・ω< )⌒★",
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/1115221489",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/FishingMZ",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/profiles/76561199527856741",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/dCGvnTtpHN",
		},
 		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/fishingxxxx",
		},
	],
});
