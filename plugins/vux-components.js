import Vue from 'vue'
import { 
    Group,
    Cell, 
    Actionsheet,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab, 
    TabItem,
    Flexbox,
    FlexboxItem,
    XImg,
    Msg, 
    Divider,
    XButton,
    Search,
    Panel,
    Card,
    ViewBox,
    Qrcode,
    XInput
} from 'vux'
import FooterBar from '~/components/footer'
import SearchTop from '~/components/search-top.vue'
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('actionsheet', Actionsheet)
Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-img',XImg);

Vue.component('msg', Msg)
Vue.component('divider', Divider)
Vue.component('x-button',XButton);
Vue.component('search',Search);
Vue.component('panel',Panel);
Vue.component('card',Card);
Vue.component('view-box',ViewBox);
Vue.component('qrcode',Qrcode);
Vue.component('x-input',XInput);

Vue.component('footer-bar',FooterBar);
Vue.component('search-top',SearchTop);