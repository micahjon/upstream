import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const typography = new Typography({
	title: 'Upstream',
	baseFontSize: '18px',
	baseLineHeight: 1.65,
	scaleRatio: 2,
	blockMarginBottom: .5,
	headerFontFamily: ['Alegreya Sans', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
	headerGray: 10,
	bodyFontFamily: ['Noto Sans', 'Georgia', 'serif'],
	googleFonts: [
		{
			name: 'Alegreya Sans',
			styles: ['700']
		},
		{
			name: 'Noto Sans',
			styles: ['400', '700']
		}
	],
	// A normalize equivalent should already be included by Bootstrap
	includeNormalize: false,
	plugins: [CodePlugin]
})

module.exports = typography;

// Use typography.toString() to get CSS string
