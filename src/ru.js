(function() {
  angular.module('getcm.l10n.ru', ['l10n']).config(['l10nProvider', function(l10n) {
    l10n.add('ru', {
      navbar: {
        about:"� �������",
        download:"��������",
        devices:"����������",
        blog:"����",
        forum:"�����",
        community:"����������",
        manufacturers:"�������������",
        all_manufacturers:"��� �������������"
      }
    });
  }]);
}).call(this);
