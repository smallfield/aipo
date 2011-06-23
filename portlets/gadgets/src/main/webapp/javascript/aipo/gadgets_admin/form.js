/*
 * Aipo is a groupware program developed by Aimluck,Inc.
 * Copyright (C) 2004-2011 Aimluck,Inc.
 * http://www.aipo.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

dojo.provide("aipo.gadgets_admin");

aipo.gadgets_admin.onLoadDialog = function(portlet_id){


}

aipo.gadgets_admin.onReceiveMessage = function(msg){
    if(!msg) {
        var arrDialog = dijit.byId("modalDialog");
        if(arrDialog){
            arrDialog.hide();
        }
        aipo.portletReload('gadgets_admin');
    }
    if (dojo.byId('messageDiv')) {
        dojo.byId('messageDiv').innerHTML = msg;
    }
}

aipo.gadgets_admin.hideDialog = function() {
    var arrDialog = dijit.byId("modalDialog");
    if(arrDialog){
       arrDialog.hide();
    }
    aipo.portletReload('gadgets_admin');
};

aipo.gadgets_admin.ajaxCheckboxDeleteSubmit = function(button, url, indicator_id, portlet_id, receive) {
	aimluck.io.ajaxVerifyCheckbox( button.form, aipo.gadgets_admin.ajaxMultiDeleteSubmit, button, url, indicator_id, portlet_id, receive );
};

aipo.gadgets_admin.ajaxMultiDeleteSubmit = function(button, url, indicator_id, portlet_id, receive) {
	  if(confirm('選択したアプリをアンインストールしてよろしいでしょうか？')) {
	    aimluck.io.disableForm(button.form, true);
	    aimluck.io.setHiddenValue(button);
	    button.form.action = url;
	    aimluck.io.submit(button.form,indicator_id,portlet_id,receive);
	  }
};

aipo.gadgets_admin.ajaxDeleteSubmit = function(button, url, indicator_id, portlet_id, receive) {
	  if(confirm('このアプリをアンインストールしてよろしいでしょうか？')) {
	    aimluck.io.disableForm(button.form, true);
	    aimluck.io.setHiddenValue(button);
	    button.form.action = url;
	    aimluck.io.submit(button.form, indicator_id, portlet_id, receive);
	  }
};