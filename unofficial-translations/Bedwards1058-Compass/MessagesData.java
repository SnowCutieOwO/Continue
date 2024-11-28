package club.mher.compass.data;

import com.andrei1058.bedwars.api.language.Language;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;

import java.util.Arrays;

public class MessagesData {

    public final static String PATH = "addons.compass.";

    public MessagesData() {
        setupMessages();
    }

    public void setupMessages() {
        for (Language l : Language.getLanguages()) {
            YamlConfiguration yml = l.getYml();
            switch (l.getIso()) {
                // By Sxhqil (Persian)
                case "fa":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cHich Kodoom Az Bed Haye Doshman Kharab Nashode!");
                    yml.addDefault(PURCHASED, "&cShoma In Ghabeliat Ro Az Dast Midid Age Bemirid Va Dige Nemitoonid Track Konid!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cShoma Resource Haye Kafy Baraye In Kar Ro Nadarid!");
                    yml.addDefault(ALREADY_TRACKING, "&cShoma Az Ghabl In Team Ro Track Kardid!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cShoma Resource Kafy Nadarid!");
                    yml.addDefault(STATUS_LOCKED, "&cVaqty Baz Mishe Ke Hameye Bed Haye Harif Hatoon Kharab She");
                    yml.addDefault(STATUS_UNLOCKED, "&eClick Kon Ta Bekhary!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fTracking: {teamColor}&l{target} &f- Distance: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lTEAM > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aCompass &7(Rast Click)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aForooshgahe Tracker ", "&7Yek Tracker Bekhar Ta","&7Az Compasset Baraye Track Kardane","&7Harif Estefade Kon","&7In Ghabeliat Ta Vaqty Hast Ke Bemiri");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Tracker & Communications");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aForooshgahe Tracker ", "&7Yek Tracker Bekhar Ta","&7Az Compasset Baraye Track Kardane","&7Harif Estefade Kon","&7In Ghabeliat Ta Vaqty Hast Ke Bemiri", "", "&eClick Kon Ta Baz She!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aForooshgahe Tracker ", "&7Yek Tracker Bekhar Ta","&7Az Compasset Baraye Track Kardane","&7Harif Estefade Kon","&7In Ghabeliat Ta Vaqty Hast Ke Bemiri", "", "&eClick Kon Ta Baz She!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aQuick Communications", "&7Yek Payame Moshkhas Shode", "&7Baraye Ham Teami Yat Befres!", "", "&eClick Kon Ta Baz She!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Kharide Enemy Tracker");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cTrack Kardane Teame {team}", "&7Yek Tracker Bekhar Ta","&7Az Compasset Baraye Track Kardane","&7Harif Estefade Kon","&7In Ghabeliat Ta Vaqty Hast Ke Bemiri", "", "&7Cost: &22 Emeralds", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aBargasht", "&7Be Tracker & Communication");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Ertebate Sarry!");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aBargasht", "&7Be Tracker & Communication");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aSalam ( ﾟ◡ﾟ)/!", "&aSalam ( ﾟ◡ﾟ)/!", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "2", "&aDaram Be Base Barmigardam", "&aDaram Be Base Barmigardam", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "3", "&aDaram Defa Mikonam!", "&aDaram Defa Mikonam!", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "4", "&aDaram Rush Midam Be Teame {team}", "&aDaram Rush Midam!", "&7Shoma In Ghabeliat Ro Darid Ke", "&7Yek Team Ro Entekhab Konid", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "5", "&aDaram {resource} &aJam Mikonam", "&aDaram Resource Jam Mikonam!", "&7Shoma In Ghabeliat Ro Darid Ke", "&7Resource Ro Entekhab Konid", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "6", "&7{resource} &aGereftam", "&aResource Gereftam!", "&7Shoma In Ghabeliat Ro Darid Ke", "&7Resource Ro Entekhab Konid", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "7", "&aMamnoon", "&aMamnoon!", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "8", "&aBargard Be Base", "&aBargard Be Base!", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "9", "&aLotfan Defa Kon!", "&aLotfan Defa Kon!", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "10", "&aBerim Be {team} &aHamle Konim", "&aBerim Rush Bedim!", "&7Shoma In Ghabeliat Ro Darid Ke", "&7Yek Team Ro Entekhab Konid", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "11", "&aMa Be {resource} &aNiaz Darim.", "&aBe Resource Niaz Darim!", "&7Shoma In Ghabeliat Ro Darid Ke", "&7Resource Ro Entekhab Konid", "", "&eClick Kon Ta Befresty!");
                        saveCommunicationItem(yml, "12", "&aYe Player Dare Miad!", "&aPlayer Dare Miad!!", "", "&eClick Kon Ta Befresty!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, Arrays.asList("&7Click Kon Ta Payam Ro Befresty: '{message}&7'", "&7Be Hamtimiat!", "", "&eClick Kon Ta Befresty!"));
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aBargasht", "&7Be Quick Communications");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aBargasht", "&7Be Quick Communications");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lIRON");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lGOLD");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMOND");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lEMERALD");
                case "es":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cNo todos los enemigos tienen la cama destruida!");
                    yml.addDefault(PURCHASED, "&cPerderás la habilidad de rastrear a este equipo cuando mueras!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cNo tienes suficientes recursos!");
                    yml.addDefault(ALREADY_TRACKING, "&cYa estas rastreando a este equipo!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cNo tienes suficientes recursos!");
                    yml.addDefault(STATUS_LOCKED, "&cSe desbloqueara cuando todas las camas enemigas esten destruidas!");
                    yml.addDefault(STATUS_UNLOCKED, "&eClick para comprar!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fRastreando a: {teamColor}&l{target} &f- Distancia: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lTEAM > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aBrujula &7(Click Derecho)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&7Comunicación rápida y rastreador");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aTienda de rastreadores", "&7Compra la habilidad de rastrear", "&7para tu brújula", "&7rastreando a cada jugador en un", "&7equipo específico hasta", "&7que mueras.", "", "&eClick para abrir!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aTienda de rastreadores", "&7Compra la habilidad de rastrear", "&7para tu brújula", "&7rastreando a cada jugador en un", "&7equipo específico hasta", "&7que mueras.", "", "&eClick para abrir!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aComunicación rápida", "&7Envía un chat rápido a", "&7tu equipo!", "", "&eClick para abrir!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Comprar rastreador de enemigos");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cRastrear equipo {team}", "&7Compra la habilidad de rastrear", "&7para tu brújula", "&7rastreando a cada jugador en un", "&7equipo específico hasta", "&7que mueras.", "", "&7Precio: &22 Emeralds", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aAtrás", "&7A Comunicación rápida y rastreador");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Comunicación rapída");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aAtrás", "&7A Comunicación rápida y rastreador");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aHola ( ﾟ◡ﾟ)/!", "&aHola ( ﾟ◡ﾟ)/!", "", "&eClick apra enviar!");
                        saveCommunicationItem(yml, "2", "&aEstoy volviendo a la base!", "&aEstoy volviendo a la base!", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "3", "&aEstoy defendiendo!", "&aEstoy defendiendo!", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "4", "&aEstoy atacando a {team}", "&aEstoy atacando!", "&7Tienes que seleccionar", "&7el equipo", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "5", "&aEstoy recolectando {resource}", "&aEstoy recolectando recursos!", "&7Tienes que seleccionar", "&7el material", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "6", "&aTengo {resource}", "&aTengo materiales!", "&7Tienes que seleccionar", "&7el material", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "7", "&aGracias!", "&aGracias!", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "8", "&aVuelve a la base", "&aVuelve a la base!", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "9", "&aPorfavor, defiende!", "&aPorfavor, defiende!", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "10", "&aVamos a atacar a {team}", "&aVamos a atacar!", "&7Tienes que seleccionar", "&7el equipo", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "11", "&aNecesitamos {resource}", "&aNecesitamos materiales!", "&7Tienes que seleccionar", "&7el material", "", "&eClick para enviar!");
                        saveCommunicationItem(yml, "12", "&aEsta entrando un jugador!", "&aEsta entrando un jugador!", "", "&eClick para enviar!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Click para enviar: '{message}&7'", "&7a tu equipo!", "", "&eClick para enviar!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aVolver", "&7A comunicacion rápida");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Selecciona una accion:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aVolver", "&7A comunicacion rápida");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lHIERRO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lORO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMANTES");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lESMERALDAS");
                    break;
                case "ru":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cЕще не все вражеские кровати уничтожены!");
                    yml.addDefault(PURCHASED, "&cВы потеряете возможность отслеживать эту команду, когда умрете!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cУ вас недостаточно ресурсов!");
                    yml.addDefault(ALREADY_TRACKING, "&cВы уже отслеживаете эту команду!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cУ вас недостаточно ресурсов!");
                    yml.addDefault(STATUS_LOCKED, "&cОткрывается, когда все вражеские кровати уничтожены!");
                    yml.addDefault(STATUS_UNLOCKED, "&eНажмите, чтобы купить!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fОтслеживание: {teamColor}&l{target} &f- дистанция: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lКОМАНДА > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aКомпас &7(ПКМ)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Трекер и коммуникации");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aМагазин трекеров", "&7Обновление отслеживания покупок", "&7для вашего компаса, который будет", "&7отслеживать каждого игрока на", "&7конкретная команда, пока вы" , "&7умри.", "", "&eНажмите, чтобы открыть!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aМагазин трекеров", "&7Обновление отслеживания покупок", "&7для вашего компаса, который будет", "&7отслеживать каждого игрока на", "&7конкретная команда, пока вы" , "&7умри.", "", "&eНажмите, чтобы открыть!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aБыстрое общение", "&7Отправить выделенный чат", "&7сообщения своим товарищам", "&7по команде!", "", "&eНажмите, чтобы открыть!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Покупка Враг Трекер");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cКоманда трека {team}", "&7Обновление отслеживания покупок" , "&7для вашего компаса, который будет" , "&7отслеживать каждого игрока на", "&7конкретная команда, пока вы", "&7умри.", "", "&7Расходы: &22 Изумруды", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aВернитесь назад", "&7К трекеру и связи");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Быстрое общение");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aВернитесь назад", "&7К трекеру и связи");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aПривет ( ﾟ◡ﾟ)/!", "&aПривет ( ﾟ◡ﾟ)/!", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "2", "&aЯ возвращаюсь на базу!", "&aЯ возвращаюсь на базу!", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "3", "&aЯ защищаюсь!", "&aЯ защищаюсь!", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "4", "&aЯ атакую {team}", "&aЯ атакую!", "&7Вы сможете выбрать", "&7команда", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "5", "&aЯ собираю {resource}", "&aСобираю ресурсы!", "&7Вы сможете выбрать", "&7ресурс", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "6", "&aУ меня есть {resource}", "&aУ меня есть ресурсы!", "&7Вы сможете выбрать", "&7ресурс", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "7", "&aСпасибо", "&aСпасибо", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "8", "&aВозвращайся на базу!", "&aВозвращайся на базу!", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "9", "&aПожалуйста, защищайтесь!", "&aПожалуйста, защищайтесь!", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "10", "&aАтакуем {team}", "&aАтакуем!", "&7Вы сможете выбрать", "&7команда", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "11", "&aНам нужно {resource}", "&aНам нужны ресурсы!", "&7Вы сможете выбрать", "&7ресурс", "", "&eНажмите, чтобы отправить!");
                        saveCommunicationItem(yml, "12", "&aВходящий игрок!", "&aВходящий игрок!!", "", "&eНажмите, чтобы отправить!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Нажмите, чтобы отправить", "&7сообщение: '{message}&7'", "&7своим товарищам по команде!", "", "&eНажмите, чтобы отправить!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Выберите вариант:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aВернитесь назад" , "&7К быстрой связи!" );
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Выберите вариант:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aВернитесь назад", "&7К быстрой связи!");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lУТЮГ");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lЗОЛОТО");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lАЛМАЗ");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lИЗУМРУД");
                    break;

                // By @SAvselgafg415 (Polish)
                case "pl":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cWszystkie łóżka nie zostały zniszczone!");
                    yml.addDefault(PURCHASED, "&cJeśli umrzesz stracisz namierzanie!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cMasz za malo surowców!");
                    yml.addDefault(ALREADY_TRACKING, "&cNamierzasz już tą drużynę!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cNie stać ciebie!");
                    yml.addDefault(STATUS_LOCKED, "&cBędzięsz mógł tego użyć, jeśli wszystkie łóżka zostaną zniszczone!");
                    yml.addDefault(STATUS_UNLOCKED, "&eKliknij, aby kupić!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fNamierzanie: {teamColor}&l{target} &f- Dystans: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lDRUŻYNA > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aKompas &7(PRM)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Namierzanie i komunikacja");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aNamierzanie", "&7Kupując namierzanie drużyny", "&7jesteś przekonany, że", "&7dojdziesz do wroga", "&7Stracisz namierzanie", "&7jeśli umrzesz.", "", "&eKliknij, aby otworzyc!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aNamierzanie", "&7Kupując namierzanie drużyny", "&7jesteś przekonany, że", "&7dojdziesz do wroga", "&7Stracisz namierzanie", "&7jeśli umrzesz.", "", "&eKliknij, aby otworzyc!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aSzybka komunikacja", "&7Kontaktuj się ze", "&7swoją drużymą!", "", "&eKliknik, aby otworzyć!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Kup namierzanie");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cNamierzaj drużynę {team}", "&7Kupując namierzanie drużyny", "&7jesteś przekonany, że", "&7dojdziesz do wroga.", "&7Wszystkie łóżka muszą zostać", "&7zniszczone, aby użyc namierzania.", "", "&7Cena: &22 Emeraldy", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aPowrot", "&7Powraca ciebie do głównej strony");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&aSzybka komunikacja");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aPowrot", "&7Powraca ciebie do głównej strony");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aCześć ( ﾟ◡ﾟ)/!", "&aCześć ( ﾟ◡ﾟ)/!", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "2", "&aWracam do bazy!", "&aWracam do bazy!", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "3", "&aBronię!", "&aBronię!", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "4", "&aAtakuję drużynę {team}", "&aAtakuję!", "&7Będziesz mógł wybrać", "&7drużynę.", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "5", "&aZbieram {resource}", "&aZbieram surowce!", "&7Będziesz mógł wybrać", "&7zasób", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "6", "&aPosiadam {resource}", "&aMam surowce!", "&7Będziesz mógł wybrać", "&7zasób", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "7", "&aDziękuję", "&aDziękuję", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "8", "&aWracaj do bazy", "&aWracaj do bazy!", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "9", "&aProszę, broń bazę", "&aProszę, broń bazę!", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "10", "&aZaatakujmy {team}", "&aZaatakujmy!", "&7Będziesz mógł wybrać", "&7drużynę.", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "11", "&aPotrzebujemy {resource}", "&aPotrzebne nam są!", "&7Będziesz mógł wybrać", "&7zasób", "", "&eKliknij, aby wyslac!");
                        saveCommunicationItem(yml, "12", "&aWrog sie zbliza!", "&aWrog sie zbliza!!", "", "&eKliknij, aby wyslac!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Kliknij, aby wyslac wiadomosc: '{message}&7'", "&7do twojej druzyny!", "", "&eKliknij, aby wyslac!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Wybierz opcję:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aPowrot", "&7Powraca ciebie do szybkiej komunimacji");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Wybierz opcję:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aPowrot", "&7Powraca ciebie do szybkiej komunimacji");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lZELAZO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lZLOTO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMENT");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lSZMARAGD");
                    break;

                // By @Gradin98 (Romain)
                case "ro":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cNu toate paturile au fost distruse inca!");
                    yml.addDefault(PURCHASED, "&cO sa pierzi abilitatea de a urmarii aceasta echipa cand vei murii!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cNu ai destule resurse!");
                    yml.addDefault(ALREADY_TRACKING, "&cDeja urmaresti aceasta echipa!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cNu ai destule resurse!");
                    yml.addDefault(STATUS_LOCKED, "&cSe va debloca cand toate paturile inamicilor vor fi distruse!");
                    yml.addDefault(STATUS_UNLOCKED, "&eClick pentru a cumpara!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fUrmaresti: {teamColor}&l{target} &f- Distanta: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lEchipa > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aCompas &7(Click Dreapta)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Tracker & Communications");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aMagazin de Trackere", "&7Cumpara tracker upgrades", "&7pentru compasul care va", "&7urmarii jucatorii dintr-o", "&7echipa specifica pana cand tu vei", "&7murii.", "", "&eClick sa deschizi!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aMagazin de Trackere", "&7Cumpara tracker upgrades", "&7pentru compasul care va", "&7urmarii jucatorii dintr-o", "&7echipa specifica pana cand tu vei", "&7murii.", "", "&eClick sa deschizi!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aComunicare rapida", "&7Trimite mesaje evidentiate", "&7catre echipa ta!", "", "&eClick sa deschizi!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Cumpara tracker inamic");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cUrmareste echipa {team}", "&7Cumpara tracker upgrades", "&7pentru compasul care va", "&7urmarii jucatorii dintr-o", "&7echipa specifica pana cand tu vei", "&7murii.", "", "&7Cost: &22 Emeralde", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aDu-te inapoi", "&7To Tracker & Communication");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Comunicare Rapida");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aDu-te inapoi", "&7To Tracker & Communication");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aSalut ( ﾟ◡ﾟ)/!", "&aSalut ( ﾟ◡ﾟ)/!", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "2", "&aRevin catre baza", "&aRevin catre baza!", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "3", "&aSunt in aparare", "&aSunt in aparare!", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "4", "&aAtac echipa {team}", "&aSunt in atac!", "&7Vei avea posibilitatea de a", "&7selecta echipa", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "5", "&aColectez {resource}", "&aColectez resurse!", "&7Vei avea posibilitatea de a", "&7selecta resursa", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "6", "&aAm {resource}", "&aAm resursa!", "&7Vei avea posibilitatea de a", "&7selecta resursa", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "7", "&aMultumesc", "&aMultumesc!", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "8", "&aDu-te inapoi in baza", "&aDu-te inapoi in baza", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "9", "&aTe rog apara!", "&aTe rog apara!", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "10", "&aSa atacam echipa {team}", "&aSa atacam!", "&7Vei avea posibilitatea de a", "&7selecta echipa", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "11", "&aAvem nevoie de {resource}", "&aAvem nevoie de resurse!", "&7Vei avea posibilitatea de a", "&7selecta resursa", "", "&eClick sa trimiti!");
                        saveCommunicationItem(yml, "12", "&aVine un player!", "&aVine un player!!", "", "&eClick sa trimiti!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Click sa trimiti mesajul: '{message}&7'", "&7catre echipa ta", "", "&eClick sa trimiti!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Selecteaza o optiunea:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aDu-te inapoi", "&7Catre comunicare rapida");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Selecteaza o optiune:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aDu-te inapoi", "&7Catre comunicare rapida");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lFIER");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lAUR");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMANT");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lEMERALD");
                    break;

                // By @Yuri2005 (Italian)
                case "it":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cNon sono distrutti tutti i letti!");
                    yml.addDefault(PURCHASED, "&cPerderai l'abilità di rintracciare i giocatori alla morte!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cNon hai abbastanza risorse!");
                    yml.addDefault(ALREADY_TRACKING, "&cStai già rintracciando un team!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cNon ha abbastanza risorse!");
                    yml.addDefault(STATUS_LOCKED, "&cSi sbloccherà quando tutti i letti sono distrutti!");
                    yml.addDefault(STATUS_UNLOCKED, "&eClicca per acquistare!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fTracking: {teamColor}&l{target} &f- Distanza: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lTEAM > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aBussola &7(Click destro)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Tracker & Comunicazioni");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aAcquista il tracker", "&7Compra l'aggiornamento Tracker", "&7che ci penserà la tua bussola a farlo", "&7Rintraccia ogni giocatore in una", "&7squadra specifica fino alla", "&7tua morte!.", "", "&eClicca per aprire!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aAcquista il tracker", "&7Compra l'aggiornamento Tracker", "&7che ci penserà la tua bussola a farlo", "&7Rintraccia ogni giocatore in una", "&7squadra specifica fino alla", "&7tua morte!.", "", "&eClicca per aprire!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aComunicazioni veloci", "&7Invia una chat evidenziata", "&7messaggi ai tuoi compagni di squadra!", "", "&eClicca per aprire!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Compra il player Tracker");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cRintraccia la squadra {team}", "&7Compra l'aggiornamento Tracker", "&7che ci penserà la tua bussola a farlo", "&7Rintraccia ogni giocatore in una", "&7squadra specifica fino alla", "&7tua morte!.", "", "&7Costo: &22 Smeraldi", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aTorna indietro", "&7To Tracker & Comunicazioni");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Comunicazioni veloci");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aTorna indietro", "&7To Tracker & Comunicazioni");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aCiao ( ﾟ◡ﾟ)/!", "&aCiao ( ﾟ◡ﾟ)/!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "2", "&aSto tornando alla base!", "&aSto tornando alla base!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "3", "&aSto difendendo", "&aSto difendendo!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "4", "&aSto attaccando la squadra {team}", "&aSto attaccando!", "&7potrai selezionare", "&7la squadra", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "5", "&aSto raccogliendo {resource}", "&aSto raccogliendo risorse!", "&7potrai selezionare", "&7la risorsa", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "6", "&aHo {resource}", "&aHo risorse!", "&7potrai selezionare", "&7la risorsa", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "7", "&aGrazie", "&aGrazie!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "8", "&aTorniamo in base", "&aTorniamo in base!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "9", "&aDifendete per favore", "&aPer favore difendete!", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "10", "&aAttacchiamo la squadra {team}", "&aAttacchiamo!", "&7potrai selezionare", "&7la squadra", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "11", "&aCi serve {resource}", "&aCi servono risorse!", "&7potrai selezionare", "&7la risorsa", "", "&eClicca per inviare!");
                        saveCommunicationItem(yml, "12", "&aSta arrivando un giocatore!", "&aSta arrivando un giocatore!", "", "&eClicca per inviare!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Clicca per inviare un messaggio: '{message}&7'", "&7ai tuoi compagni di squadra!", "", "&eClicca per inviare!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Scegli un'opzione:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aIndietro!", "&7Comunicazioni rapide");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Scegli un'opzione:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aTorna indietro!", "&7Comunicazioni rapide");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lFERRO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lORO");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMANTE");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lSMERALDO");
                    break;
                case "zhcn":
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&c仍有敌方的床尚未摧毁!");
                    yml.addDefault(PURCHASED, "&c死亡后将不再能追踪该队伍!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&c缺少足够的资源!");
                    yml.addDefault(ALREADY_TRACKING, "&c你已经在追踪这个队伍了!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&c你没有足够的资源!");
                    yml.addDefault(STATUS_LOCKED, "&c在摧毁所有敌方的床后解锁!");
                    yml.addDefault(STATUS_UNLOCKED, "&e点击购买!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&f正在追踪: {teamColor}&l{target} &f- 当前距离: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&l团队 > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&a指南针 &7(右键点击)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&a追踪商店", "&7为你的指南针购买升级","&7它会帮助你追踪指定队伍","&7直到你死亡.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8追踪 & 交流");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&a追踪商店", "为你的指南针购买升级","&7它会帮助你追踪指定队伍中的玩家","&7直到你死亡.", "", "&e点击打开!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&a追踪商店", "&7购买追踪升级", "为你的指南针购买升级","&7它会帮助你追踪指定队伍中的玩家","&7直到你死亡.", "", "&e点击打开!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&a快捷交流", "&7向队友发送高亮消息!", "", "&e点击打开!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8购买敌方追踪器");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&c正在追踪团队 {team}", "&7购买追踪升级", "为你的指南针购买升级","&7它会帮助你追踪指定队伍中的玩家","&7直到你死亡.", "", "&7价格: &22 绿宝石", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&a返回", "&7至追踪与交流菜单");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8快捷交流");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&a返回", "&7至追踪与交流菜单");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&a哈咯 ( ﾟ◡ﾟ)/!", "&a哈咯 ( ﾟ◡ﾟ)/!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "2", "&a正在返回基地!", "&a正在返回基地!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "3", "&a正在防守!", "&a正在防守!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "4", "&a正在攻击 {team}", "&a正在攻击!", "&7你可以选择", "&7队伍", "", "&e点击发送!");
                        saveCommunicationItem(yml, "5", "&a正在收集 {resource}", "&a正在收集资源!", "&7你可以选择", "&7资源", "", "&e点击发送!");
                        saveCommunicationItem(yml, "6", "&a我有 {resource}", "&a我有物资!", "&7你可以选择", "&7资源", "", "&e点击发送!");
                        saveCommunicationItem(yml, "7", "&a谢谢你", "&a谢谢你!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "8", "&a返回基地", "&a返回基地!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "9", "&a请求防守!", "&a请求防守!", "", "&e点击发送!");
                        saveCommunicationItem(yml, "10", "&a请求攻击 {team}", "&a请求攻击!", "&7你可以选择", "&7队伍", "", "&e点击发送!");
                        saveCommunicationItem(yml, "11", "&a我们需要 {resource}", "&a我们需要物资!", "&7你可以选择", "&7资源", "", "&e点击发送!");
                        saveCommunicationItem(yml, "12", "&a敌人进攻!", "&a敌人进攻!!", "", "&e点击发送!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7点击发送消息: '{message}&7'", "&7至你的队友!", "", "&e点击发送!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8选择:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&a返回", "&7至快捷交流界面");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&a返回", "&7至快捷交流界面");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&l铁");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&l金");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&l钻石");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&l绿宝石");
                    break;

                default:
                    yml.addDefault(NOT_ALL_BEDS_DESTROYED, "&cNot all enemy beds are destroyed yet!");
                    yml.addDefault(PURCHASED, "&cYou will lose the ability to track this team when you die!");
                    yml.addDefault(NOT_ENOUGH_RESOURCE, "&cYou don't have enough resources!");
                    yml.addDefault(ALREADY_TRACKING, "&cYou are already tracking this team!");
                    yml.addDefault(STATUS_NOT_ENOUGH, "&cYou don't have enough resource!");
                    yml.addDefault(STATUS_LOCKED, "&cUnlocks when all enemy beds are destroyed!");
                    yml.addDefault(STATUS_UNLOCKED, "&eClick to purchase!");
                    yml.addDefault(ACTION_BAR_TRACKING, "&fTracking: {teamColor}&l{target} &f- Distance: &a&l{distance}m");
                    yml.addDefault(TEAM_MESSAGE_FORMAT, "&a&lTEAM > &7{player}: {message}");
                    saveItem(yml, MainConfig.COMPASS_ITEM, "&aCompass &7(Right Click)");
                    saveItem(yml, MainConfig.TRACKER_SHOP, "&aTracker Shop", "&7Purchase tracking update for","&7your compass which will track","&7each player on a specific team","&7until you die.");
                    yml.addDefault(MAIN_MENU_TITLE, "&8Tracker & Communications");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER, "&aTracker Shop", "&7Purchase tracking upgrade", "&7for your compass which will", "&7track each player on a", "&7specific team until you", "&7die.", "", "&e点击打开!");
                    saveItem(yml, MainConfig.MAIN_MENU_TRACKER_TEAM, "&aTracker Shop", "&7Purchase tracking upgrade", "&7for your compass which will", "&7track each player on a", "&7specific team until you", "&7die.", "", "&e点击打开!");
                    saveItem(yml, MainConfig.MAIN_MENU_COMMUNICATIONS, "&aQuick Communications", "&7Send highlighted chat", "&7messages to your teammates!", "", "&e点击打开!");
                    yml.addDefault(TRACKER_MENU_TITLE, "&8Purchase Enemy Tracker");
                    saveItem(yml, MainConfig.TRACKER_MENU_TEAM_ITEM, "&cTrack Team {team}", "&7Purchase tracking upgrade", "&7for your compass which will", "&7track each player on a", "&7specific team until you", "&7die.", "", "&7Cost: &22 Emeralds", "", "{status}");
                    saveItem(yml, MainConfig.TRACKER_MENU_BACK_ITEM, "&aGo Back", "&7To Tracker & Communication");
                    yml.addDefault(COMMUNICATIONS_MENU_TITLE, "&8Quick Communications");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_BACK, "&aGo Back", "&7To Tracker & Communication");
                    if (yml.getString(PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS) == null) {
                        saveCommunicationItem(yml, "1", "&aHello ( ﾟ◡ﾟ)/!", "&aHello ( ﾟ◡ﾟ)/!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "2", "&aI'm coming back to base!", "&aI'm coming back to base!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "3", "&aI'm defending!", "&aI'm defending!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "4", "&aI''m attacking {team}", "&aI'm attacking!", "&7You will be able to select", "&7the Team", "", "&eClick to send!");
                        saveCommunicationItem(yml, "5", "&aI'm collecting {resource}", "&aI'm collecting resources!", "&7You will be able to select", "&7the Resource", "", "&eClick to send!");
                        saveCommunicationItem(yml, "6", "&aI have {resource}", "&aI have resources!", "&7You will be able to select", "&7the Resource", "", "&eClick to send!");
                        saveCommunicationItem(yml, "7", "&aThank You", "&aThank You!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "8", "&aGet back to base", "&aGet back to base!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "9", "&aPlease defend!", "&aPlease defend!", "", "&eClick to send!");
                        saveCommunicationItem(yml, "10", "&aLet's attack {team}", "&aLet's attack!", "&7You will be able to select", "&7the Team", "", "&eClick to send!");
                        saveCommunicationItem(yml, "11", "&aWe need {resource}", "&aWe need resources!", "&7You will be able to select", "&7the Resource", "", "&eClick to send!");
                        saveCommunicationItem(yml, "12", "&aPlayer incoming!", "&aPlayer incoming!!", "", "&eClick to send!");
                    }
                    yml.addDefault(COMMUNICATIONS_MENU_LORE, new String[]{"&7Click to send message: '{message}&7'", "&7to your teammates!", "", "&eClick to send!"});
                    yml.addDefault(COMMUNICATIONS_MENU_TEAMS_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_TEAMS + ".back-item", "&aGo Back", "&7To Quick Communications");
                    yml.addDefault(COMMUNICATIONS_MENU_RESOURCES_TITLE, "&8Select an option:");
                    saveItem(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".back-item", "&aGo Back", "&7To Quick Communications");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".iron", "&f&lIRON");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".gold", "&6&lGOLD");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".diamond", "&b&lDIAMOND");
                    saveResource(yml, MainConfig.COMMUNICATIONS_MENU_RESOURCES + ".emerald", "&2&lEMERALD");
                    break;
            }
            l.getYml().options().copyDefaults(true);
            l.save();
        }
    }

    public static Language getLang(Player player) {
        return Language.getPlayerLanguage(player);
    }

    public static YamlConfiguration getYml(Player player) {
        return getLang(player).getYml();
    }

    private void saveResource(YamlConfiguration yml, String path, String resourceName) {
        path = PATH + path;
        yml.addDefault(path + ".resource-name", resourceName);
    }

    private void saveItem(YamlConfiguration yml, String path, String displayName, String... lore) {
        path = PATH + path;
        yml.addDefault(path+".display-name", displayName);
        yml.addDefault(path+".lore", lore);
    }

    private void saveCommunicationItem(YamlConfiguration yml, String path, String message, String displayName, String... lore) {
        path = PATH + MainConfig.COMMUNICATIONS_MENU_ITEMS +"."+ path;
        yml.addDefault(path+".message", message);
        yml.addDefault(path+".display-name", displayName);
        yml.addDefault(path+".lore", lore);
    }

    public static final String
            NOT_ALL_BEDS_DESTROYED = PATH + "messages.not-all-beds-destroyed",
            PURCHASED = PATH + "messages.purchase-message",
            NOT_ENOUGH_RESOURCE = PATH + "messages.not-enough-resource",
            ALREADY_TRACKING = PATH + "messages.already-tracking",
            STATUS_UNLOCKED = PATH + "tracker-status.unlocked",
            STATUS_LOCKED = PATH + "tracker-status.locked",
            STATUS_NOT_ENOUGH = PATH + "tracker-status.not-enough",
            ACTION_BAR_TRACKING = PATH + "action-bar.tracking-format",
            TEAM_MESSAGE_FORMAT = PATH + "team-message-format",
            MAIN_MENU_TITLE = PATH + "menus.main-menu.title",
            TRACKER_MENU_TITLE = PATH + "menus.tracker-menu.title",
            COMMUNICATIONS_MENU_TITLE = PATH + "menus.communications.title",
            COMMUNICATIONS_MENU_RESOURCES_TITLE = PATH + "communication-menus.resources.title",
            COMMUNICATIONS_MENU_TEAMS_TITLE = PATH + "communication-menus.teams.title",
            COMMUNICATIONS_MENU_LORE = PATH + "communication-menus.lore";

}