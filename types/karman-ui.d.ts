import Vue, {PluginObject} from 'vue'
import {KarmanUIComponent, KarmanUIComponentSize, KarmanUIHorizontalAlignment} from './component'

import {KuiAlert} from './alert'
import {KuiAside} from './aside'
import {KuiAutocomplete} from './autocomplete'
import {KuiBadge} from './badge'
import {KuiBreadcrumb} from './breadcrumb'
import {KuiBreadcrumbItem} from './breadcrumb-item'
import {KuiButton} from './button'
import {KuiButtonGroup} from './button-group'
import {KuiCard} from './card'
import {KuiCarousel} from './carousel'
import {KuiCarouselItem} from './carousel-item'
import {KuiCascader} from './cascader'
import {KuiCheckbox} from './checkbox'
import {KuiCheckboxButton} from './checkbox-button'
import {KuiCheckboxGroup} from './checkbox-group'
import {KuiCol} from './col'
import {KuiCollapse} from './collapse'
import {KuiCollapseItem} from './collapse-item'
import {KuiColorPicker} from './color-picker'
import {KuiContainer} from './container'
import {KuiDatePicker} from './date-picker'
import {KuiDialog} from './dialog'
import {KuiDropdown} from './dropdown'
import {KuiDropdownItem} from './dropdown-item'
import {KuiDropdownMenu} from './dropdown-menu'
import {KuiFooter} from './footer'
import {KuiForm} from './form'
import {KuiFormItem} from './form-item'
import {KuiHeader} from './header'
import {KuiInput} from './input'
import {KuiInputNumber} from './input-number'
import {KuiLoading} from './loading'
import {KuiMain} from './main'
import {KuiMenu} from './menu'
import {KuiMenuItem} from './menu-item'
import {KuiMenuItemGroup} from './menu-item-group'
import {KuiMessage} from './message'
import {KuiMessageBox} from './message-box'
import {KuiNotification} from './notification'
import {KuiOption} from './option'
import {KuiOptionGroup} from './option-group'
import {KuiPagination} from './pagination'
import {KuiPopover} from './popover'
import {KuiProgress} from './progress'
import {KuiRate} from './rate'
import {KuiRadio} from './radio'
import {KuiRadioButton} from './radio-button'
import {KuiRadioGroup} from './radio-group'
import {KuiRow} from './row'
import {KuiSelect} from './select'
import {KuiSlider} from './slider'
import {KuiStep} from './step'
import {KuiSteps} from './steps'
import {KuiSubmenu} from './submenu'
import {KuiSwitch} from './switch'
import {KuiTable} from './table'
import {KuiTableColumn} from './table-column'
import {KuiTag} from './tag'
import {KuiTabs} from './tabs'
import {KuiTabPane} from './tab-pane'
import {KuiTimeline} from './timeline'
import {KuiTimelineItem} from './timeline-item'
import {KuiTimePicker} from './time-picker'
import {KuiTimeSelect} from './time-select'
import {KuiTooltip} from './tooltip'
import {KuiTransfer} from './transfer'
import {KuiTree, TreeData} from './tree'
import {KuiUpload} from './upload'
import {KuiLink} from './link'
import {KuiDivider} from './divider'
import {KuiIcon} from './icon'
import {KuiCalendar} from './calendar'
import {KuiImage} from './image'
import {KuiBacktop} from './backtop'
import {KuiInfiniteScroll} from './infinite-scroll'
import {KuiPageHeader} from './page-header'
import {KuiAvatar} from './avatar'
import {KuiDrawer} from './drawer'
import {KuiPopconfirm} from './popconfirm'
import {KuiSkeleton} from './skeleton'
import {KuiSkeletonItem} from './skeleton-item'
import {KuiCascaderPanel} from './cascader-panel'
import {KuiEmpty} from './empty'
import {KuiSpinner} from './spinner'
import {KuiDescriptions} from './descriptions'
import {KuiDescriptionsItem} from './descriptions-item'
import {KuiResult} from './result'


import { KuiOrbitElements } from './orbit-elements'

import { KuiSatellitePoint } from './satellite-point'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of karman-ui */
export const version: string

/**
 * Install all karman-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(KarmanUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** KarmanUI component common definition */
export type Component = KarmanUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = KarmanUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = KarmanUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: KuiLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: KuiMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: KuiMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: KuiNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends KuiAlert {}

/** Aside Component */
export class Aside extends KuiAside {}

/** Autocomplete Component */
export class Autocomplete extends KuiAutocomplete {}

/** Bagde Component */
export class Badge extends KuiBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends KuiBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends KuiBreadcrumbItem {}

/** Button Component */
export class Button extends KuiButton {}

/** Button Group Component */
export class ButtonGroup extends KuiButtonGroup {}

/** Card Component */
export class Card extends KuiCard {}

/** Cascader Component */
export class Cascader extends KuiCascader {}

/** Carousel Component */
export class Carousel extends KuiCarousel {}

/** Carousel Item Component */
export class CarouselItem extends KuiCarouselItem {}

/** Checkbox Component */
export class Checkbox extends KuiCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends KuiCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends KuiCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends KuiCol {}

/** Collapse Component */
export class Collapse extends KuiCollapse {}

/** Collapse Item Component */
export class CollapseItem extends KuiCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends KuiColorPicker {}

/** Container Component */
export class Container extends KuiContainer {}

/** Date Picker Component */
export class DatePicker extends KuiDatePicker {}

/** Dialog Component */
export class Dialog extends KuiDialog {}

/** Dropdown Component */
export class Dropdown extends KuiDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends KuiDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends KuiDropdownMenu {}

/** Footer Component */
export class Footer extends KuiFooter {}

/** Form Component */
export class Form extends KuiForm {}

/** Form Item Component */
export class FormItem extends KuiFormItem {}

/** Header Component */
export class Header extends KuiHeader {}

/** Input Component */
export class Input extends KuiInput {}

/** Input Number Component */
export class InputNumber extends KuiInputNumber {}

/** Main Component */
export class Main extends KuiMain {}

/** Menu that provides navigation for your website */
export class Menu extends KuiMenu {}

/** Menu Item Component */
export class MenuItem extends KuiMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends KuiMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends KuiOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends KuiOptionGroup {}

/** Pagination Component */
export class Pagination extends KuiPagination {}

/** Popover Component */
export class Popover extends KuiPopover {}

/** Progress Component */
export class Progress extends KuiProgress {}

/** Rate Component */
export class Rate extends KuiRate {}

/** Radio Component */
export class Radio extends KuiRadio {}

/** Radio Button Component */
export class RadioButton extends KuiRadioButton {}

/** Radio Group Component */
export class RadioGroup extends KuiRadioGroup {}

/** Row Layout Component */
export class Row extends KuiRow {}

/** Dropdown Select Component */
export class Select extends KuiSelect {}

/** Slider Component */
export class Slider extends KuiSlider {}

/** Step Component */
export class Step extends KuiStep {}

/** Steps Component */
export class Steps extends KuiSteps {}

/** Submenu Component */
export class Submenu extends KuiSubmenu {}

/** Switch Component */
export class Switch extends KuiSwitch {}

/** Table Component */
export class Table extends KuiTable {}

/** Table Column Component */
export class TableColumn extends KuiTableColumn {}

/** Tabs Component */
export class Tabs extends KuiTabs {}

/** Tab Pane Component */
export class TabPane extends KuiTabPane {}

/** Tag Component */
export class Tag extends KuiTag {}

/** Timeline Component */
export class Timeline extends KuiTimeline {}

/** Timeline Item Component */
export class TimelineItem extends KuiTimelineItem {}

/** TimePicker Component */
export class TimePicker extends KuiTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends KuiTimeSelect {}

/** Tooltip Component */
export class Tooltip extends KuiTooltip {}

/** Transfer Component */
export class Transfer extends KuiTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends KuiTree<K, D> {}

/** Upload Component */
export class Upload extends KuiUpload {}

/** Divider Component */
export class Divider extends KuiDivider {}

/** Link Component */
export class Link extends KuiLink {}

/** Image Component */
export class Image extends KuiImage {}

/** Icon Component */
export class Icon extends KuiIcon {}

/** Calendar Component */
export class Calendar extends KuiCalendar {}

/** Backtop Component */
export class Backtop extends KuiBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<KuiInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends KuiPageHeader {}

/** Avatar Component */
export class Avatar extends KuiAvatar {}

/** Drawer Component */
export class Drawer extends KuiDrawer {}

/** Popconfirm Component */
export class Popconfirm extends KuiPopconfirm {}

/** Skeleton Component */
export class Skeleton extends KuiSkeleton {}

/** Skeleton Item Component */
export class SkeletonItem extends KuiSkeletonItem {}

/** CascaderPanel Component */
export class CascaderPanel extends KuiCascaderPanel {}

/** Empty Component */
export class Empty extends KuiEmpty {}

/** Spinner Component */
export class Spinner extends KuiSpinner {}

/** Description Component */
export class Descripitions extends KuiDescriptions {}

/** Description Item Component */
export class DescripitionsItem extends KuiDescriptionsItem {}

/** Result Component */
export class Result extends KuiResult {}


/** OrbitElements Component */
export class OrbitElements extends KuiOrbitElements {}



/** SatellitePoint Component */
export class SatellitePoint extends KuiSatellitePoint {}
