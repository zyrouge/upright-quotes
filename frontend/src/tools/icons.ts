import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowRotateRight,
    faImage,
    faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowRotateRight, faImage, faCode);

export { FontAwesomeIcon as IconComponent };
