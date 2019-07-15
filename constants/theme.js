import COLORS from './colors';

const brandPrimary = COLORS.yellowDark;
const brandPrimaryTap = COLORS.yellow;

export default {
 /* https://github.com/ant-design/ant-design-mobile/wiki/设计变量表及命名规范
  * NOTE: must use `#000000` instead of `#000`
  * https://facebook.github.io/react-native/docs/colors.html
  * 8-digit-hex to 4-digit hex https://css-tricks.com/8-digit-hex-codes/
  * https://www.chromestatus.com/feature/5685348285808640 chrome will support `#RGBA`
*/
  color_text_base: COLORS.black,
  color_text_base_inverse: COLORS.black,
  color_text_secondary: '#A4A9B0',
  color_text_placeholder: '#BBBBBB',
  color_text_disabled: '#BBBBBB',
  color_text_caption: '#888888',
  color_text_paragraph: COLORS.black,
  color_link: brandPrimary,

  fill_base: COLORS.white,
  fill_body: '#F5F5F9',
  fill_tap: '#DDDDDD',
  fill_disabled: '#DDDDDD',
  fill_mask: 'rgba(0, 0, 0, .4)',
  color_icon_base: '#cccccc',
  fill_grey: '#F7F7F7',

  opacity_disabled: '0.3',

  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#6ABfF47',
  brand_warning: '#F4333C',
  brand_error: '#F4333C',
  brand_important: '#FF5B05',
  brand_wait: '#108EE9',

  border_color_base: '#DDDDDD',

  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  font_size_heading: 17,

  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  line_height_base: 1,
  line_height_paragraph: 1.5,

  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22,
  icon_size_lg: 36,

  ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

  actionsheet_item_height: 50,
  actionsheet_item_font_size: 16,

  button_height: 48,
  button_font_size: 16,

  button_height_sm: 24,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,

  ghost_button_color: COLORS.yellowDark,
  ghost_button_fill_tap: `${COLORS.yellowDark}99`,

  warning_button_fill: '#E94F4F',
  warning_button_fill_tap: '#D24747',

  link_button_fill_tap: '#DDDDDD',
  link_button_font_size: 16,

  // modal
  modal_font_size_heading: 18,
  modal_button_font_size: 18,
  modal_button_height: 50,

  // list
  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 44,

  // input
  input_label_width: 17,
  input_font_size: 17,
  input_color_icon: '#CCCCCC',
  input_color_icon_tap: brandPrimary,

  // tabs
  tabs_color: brandPrimary,
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // segmented_control
  segmented_control_color: brandPrimary,
  segmented_control_height: 27,
  segmented_control_fill_tap: `${brandPrimary}10`,

  // tab_bar
  tab_bar_fill: '#EBEEEF',
  tab_bar_height: 50,

  // toast
  toast_fill: 'rgba(0, 0, 0, .8)',

  // search_bar
  search_bar_fill: '#EFEFF4',
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon: '#BBBBBB',

  // notice_bar
  notice_bar_fill: '#FFFADA',
  notice_bar_height: 36,

  // switch
  switch_fill: '#4DD865',

  // tag
  tag_height: 25,
  tag_small_height: 15,

  // picker
  option_height: 42,

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999,
};
