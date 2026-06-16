window.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('lang-switch');
    if (!switcher) return;

    const pageKey = document.body.getAttribute('data-page') || 'home';
    const translations = {
        home: {
            en: {
                pageTitle: 'FOXTANG | Private Holdings',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Quiet Capital. Generational Vision.',
                heroSubtitle: 'A private holding house serving a select circle of principals — patient capital, cross-border stewardship, quiet conviction.',
                heroBody: 'We protect and compound family and institutional wealth across decades. Our interests span core equity, essential infrastructure, and the technologies shaping the century ahead.',
                btnBrief: 'Request Executive Brief', btnExplore: 'Explore Capabilities',
                visual1Title: 'Capital Preservation', visual1Body: 'Structuring assets to endure political and market cycles, across jurisdictions and across generations.',
                visual2Title: 'Essential Infrastructure', visual2Body: 'Investments in the systems that underpin lasting enterprise value — shielded from short-term pressures.',
                tile1Title: 'Discretion', tile1Body: 'We move quietly. Our principals\' affairs remain private, their interests protected, their names absent from the record.',
                tile2Title: 'Conviction', tile2Body: 'We commit only when we understand deeply. Every position reflects years of accumulated judgment, not market sentiment.',
                tile3Title: 'Patience', tile3Body: 'We measure returns in decades. Our structures are built to outlast the conditions that created them.',
                banner1Title: 'Quiet Footprint', banner1Body: 'Present across North America, Europe and Asia — without fanfare, without announcement.',
                banner2Title: 'Independent Judgment', banner2Body: 'We answer to no one but our principals. Every decision is weighed against a single question: will this endure?',
                profile1Title: 'Stewardship', profile1Body: 'Guiding portfolio companies with the patience and perspective that only private, unconflicted capital can offer.',
                profile2Title: 'Quiet Partnership', profile2Body: 'Direct investments structured to protect identity, align interests, and let returns compound in peace.',
                profile3Title: 'Future Participation', profile3Body: 'Patient capital for the technologies that matter: secure infrastructure, artificial intelligence, and the systems that will define the next century.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries and private partnerships, we may be reached through the channel below.'
            },
            zh: {
                pageTitle: 'FOXTANG | 私人控股',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '安静持股，世代视野',
                heroSubtitle: '一家私人控股机构，服务于少数核心投资人——耐心资本，跨境守护，安静判断。',
                heroBody: '我们守护并增值家族与机构的跨代财富。投资涵盖核心股权、关键基础设施，以及塑造未来百年的技术变革。',
                btnBrief: '索取高管简报', btnExplore: '探索能力',
                visual1Title: '资本保值', visual1Body: '构建能抵御政治与市场周期的资产架构，跨越辖区与世代。',
                visual2Title: '关键基建', visual2Body: '投资支撑持久企业价值的基础系统，远离短期噪音。',
                tile1Title: '审慎', tile1Body: '我们悄然行事。投资人的事务始终私密，利益始终受护，名字永不公开。',
                tile2Title: '信念', tile2Body: '深度理解之后才下注。每个仓位凝聚的是多年积累的判断，而非市场情绪。',
                tile3Title: '耐心', tile3Body: '以十年丈量回报。我们的架构，比催生它们的时代更持久。',
                banner1Title: '安静布局', banner1Body: '低调分布于北美、欧洲与亚洲——无张扬，无声张。',
                banner2Title: '独立判断', banner2Body: '只对投资人负责。每个决策，只问一事：能否持久？',
                profile1Title: '守护', profile1Body: '以只有私人、无利益冲突的资本才能提供的耐心与视角，为组合公司领航。',
                profile2Title: '安静合作', profile2Body: '设计保护身份、对齐利益、让回报在平静中复利的直接投资架构。',
                profile3Title: '未来参与', profile3Body: '为关键技术提供耐心资本：安全基础设施、人工智能，以及将定义下个世纪的系统。',
                contactTitle: '联系', contactBody: '机密咨询与私人合作，请通过下方渠道联系。'
            }
        },
        about: {
            en: {
                pageTitle: 'About | FOXTANG',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'About FOXTANG',
                heroSubtitle: 'A private holding house. We exist to protect and grow our principals\' capital — quietly, across generations.',
                heroBody: 'We work behind the scenes — structuring holdings, preserving privacy, ensuring interests remain aligned across borders and decades. We are not chasing the next quarter. We are building for the next generation.',
                card1Title: 'Quiet Presence', card1Body: 'Operating across legal and financial centres in North America, Europe and Asia — discreetly, without publicity.',
                card2Title: 'Stewardship First', card2Body: 'Oversight and advisory are embedded at every stage of investment, acquisition and portfolio management.',
                missionTitle: 'Our Purpose', missionBody: 'To help principals build and preserve wealth across generations — with structures that endure, quietly.',
                valuesTitle: 'Our Values', valuesBody: 'Discretion. Patience. Stewardship. We choose the quiet path — continuity over excitement, privacy over profile.',
                standardTitle: 'Our Standard', standardBody: 'Every engagement is measured against a single test: would we commit our own family\'s capital to this?',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries and private partnerships, we may be reached through the channel below.'
            },
            zh: {
                pageTitle: '关于 | FOXTANG',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '关于 FOXTANG',
                heroSubtitle: '一家私人控股机构。我们存在的意义，是安静地守护和增值投资人的跨代资本。',
                heroBody: '我们在幕后运作——构建控股架构，维护隐私，确保利益在跨境与数十年间保持对齐。我们不追逐下个季度，我们为下一代而建。',
                card1Title: '安静布局', card1Body: '在北美、欧洲与亚洲法律及金融中心低调运作，不事声张。',
                card2Title: '守护优先', card2Body: '守护与咨询体系嵌入每个投资、收购与组合管理阶段。',
                missionTitle: '我们的使命', missionBody: '帮助投资人构建和传承跨代财富——以持久、安静的结构。',
                valuesTitle: '我们的价值', valuesBody: '审慎。耐心。守护。我们选择安静的道路——连续性而非刺激，私密而非曝光。',
                standardTitle: '我们的标准', standardBody: '每项合作只经一项检验：我们是否愿将自家资本托付于此？',
                contactTitle: '联系', contactBody: '机密咨询与私人合作，请通过下方渠道联系。'
            }
        },
        capabilities: {
            en: {
                pageTitle: 'Capabilities | FOXTANG',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Core Capabilities',
                heroSubtitle: 'A comprehensive set of capabilities — delivered quietly, executed privately.',
                heroBody: 'From structured holdings to operational frameworks, everything we do is designed for principals who value discretion above all.',
                card1Title: 'Capital Structuring', card1Body: 'Private vehicles. Special purpose entities. Equity frameworks. All designed to protect control and withstand scrutiny.',
                card2Title: 'Quiet Oversight', card2Body: 'Embedding board-level advisory, compliance and risk control in every structure we support — without publicity.',
                advisoryTitle: 'Private Advisory', advisoryBody: 'Discreet counsel for complex transactions, cross-border structuring, and the alignment of interests across intricate ownership arrangements.',
                managementTitle: 'Asset Management', managementBody: 'Quiet portfolio management for entities that demand attention, privacy and durability.',
                technologyTitle: 'Technology Stewardship', technologyBody: 'Managing secure digital infrastructure, proprietary intelligence systems and next-generation platforms — privately.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries and private partnerships, we may be reached through the channel below.'
            },
            zh: {
                pageTitle: '能力 | FOXTANG',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '核心能力',
                heroSubtitle: '一整套能力——安静交付，私下执行。',
                heroBody: '从结构化持股到运营框架，一切为将审慎置于首位的投资人而设计。',
                card1Title: '资本架构', card1Body: '私人载体。特殊目的实体。股权框架。一切旨在保护控制权，经得起审视。',
                card2Title: '安静监督', card2Body: '在我们支持的每个架构中嵌入董事会级咨询、合规与风险控制——不事声张。',
                advisoryTitle: '私人咨询', advisoryBody: '为复杂交易、跨境架构与纷繁所有权安排中的利益协同，提供审慎建议。',
                managementTitle: '资产管理', managementBody: '为需要关注、隐私与耐久的实体，提供安静的组合管理。',
                technologyTitle: '技术托管', technologyBody: '私下管理安全数字基础设施、专有情报系统与下一代平台。',
                contactTitle: '联系', contactBody: '机密咨询与私人合作，请通过下方渠道联系。'
            }
        },
        portfolio: {
            en: {
                pageTitle: 'Portfolio | FOXTANG',
                navHome: 'Home', navAbout: 'About', navCapabilities: 'Capabilities', navPortfolio: 'Portfolio', navContact: 'Contact',
                heroTitle: 'Portfolio',
                heroSubtitle: 'A collection of assets chosen for endurance, not headlines.',
                heroBody: 'We seek assets that can compound quietly — through cycles, across regimes, over decades.',
                card1Title: 'Core Equity', card1Body: 'Ownership stakes in enterprises whose importance grows with time, not with market attention.',
                card2Title: 'Essential Infrastructure', card2Body: 'Investments in the operational platforms and physical systems that enterprise continuity depends upon.',
                assetTitle: 'Stable Infrastructure', assetBody: 'Assets that underpin critical services — stable cash flows, structural protection, minimal drama.',
                techTitle: 'Technology Platforms', techBody: 'Holdings in advanced systems, secure networks and enterprise-grade services — the quiet backbone of the modern economy.',
                participationTitle: 'Private Partnership', participationBody: 'Selective co-investments and direct equity positions that complement our core holdings, structured for privacy.',
                contactTitle: 'Contact', contactBody: 'For confidential inquiries and private partnerships, we may be reached through the channel below.'
            },
            zh: {
                pageTitle: '组合 | FOXTANG',
                navHome: '首页', navAbout: '关于', navCapabilities: '能力', navPortfolio: '组合', navContact: '联系',
                heroTitle: '投资组合',
                heroSubtitle: '一组因耐久而被选中的资产，非因头条。',
                heroBody: '我们寻找能安静复利的资产——穿越周期，跨越政体，历经数十年。',
                card1Title: '核心股权', card1Body: '在企业中持有随时间增值的股权——价值因时间而增长，非因市场关注。',
                card2Title: '关键基建', card2Body: '投资企业连续性所依赖的运营平台与实体系统。',
                assetTitle: '稳定基建', assetBody: '支撑关键服务的资产——稳定现金流，结构性保护，无戏剧性。',
                techTitle: '技术平台', techBody: '持股涵盖先进系统、安全网络与企业级服务——现代经济的安静脊梁。',
                participationTitle: '私人合作', participationBody: '精选共同投资与直接股权，补充核心持股，以隐私为架构基础。',
                contactTitle: '联系', contactBody: '机密咨询与私人合作，请通过下方渠道联系。'
            }
        }
    };

    const pageTranslations = translations[pageKey];
    if (!pageTranslations) return;

    function setLanguage(lang) {
        const items = document.querySelectorAll('[data-i18n]');
        items.forEach(item => {
            const key = item.getAttribute('data-i18n');
            if (pageTranslations[lang][key]) {
                item.textContent = pageTranslations[lang][key];
            }
        });

        const titleKey = document.querySelector('[data-i18n-title]');
        if (titleKey) {
            document.title = pageTranslations[lang][titleKey.getAttribute('data-i18n-title')];
        } else if (pageTranslations[lang].pageTitle) {
            document.title = pageTranslations[lang].pageTitle;
        }

        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    switcher.addEventListener('click', function (event) {
        const button = event.target.closest('.lang-btn');
        if (!button) return;
        setLanguage(button.getAttribute('data-lang'));
    });

    setLanguage('en');
});
