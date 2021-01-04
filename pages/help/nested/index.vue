<script>
import HelpPageMixin from '@/mixins/HelpPageMixin';
import { fetchHelpPage } from '@/helpers/fetchHelpPage';

export default {
	extends: HelpPageMixin,
	asyncData: fetchHelpPage('help/nested', 'index'),
};
</script>
