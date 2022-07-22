import log from './util/logger.js';
import { generateReportData, storeData } from './data.js';

const data = generateReportData(log);
storeData(data);