<script>

export default {
    name: 'Counter',
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            loaded: false,
            expired: false,
            d: "Días",
            h: "Horas",
            m: "Min",
            s: "Seg",
            title: "Falta",
            title1: "¡Llegó el día!"

        };
    },
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, // Los meses en JavaScript van de 0 a 11
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt">{{ title }}</h3>
            <h3 v-show="expired" class="counter__txt">{{ title1 }}</h3>
        </section>

        <section class="counter__container">
            
            <div class="container_hora">
                <div class="counter__content dia">
                    <h1>{{ displayDays }}</h1>
                    <span class="counter__label">{{ d }}</span>
                </div>
                <div class="counter__content hora">
                    <h1>{{ displayHours }}</h1>
                    <span class="counter__label">{{ h }}</span>
                </div>
                <div class="counter__content minuto">
                    <h1>{{ displayMinutes }}</h1>
                    <span class="counter__label">{{ m }}</span>
                </div>
                <div class="counter__content segundos">
                    <h1>{{ displaySeconds }}</h1>
                    <span class="counter__label">{{ s }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.counter__txt{
    font-size: 60px;
    font-family: var(--font-title-section);
    color:var( --font-primary-color);
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

.counter__container {
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
    height: 100px;
}
.container_hora{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: auto;
    width: 240px;
    height:auto;
}
.counter__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.counter__content > h1{
    font-size:1.5rem;
    font-family:var(--font-btn-light);
    color:var( --font-primary-color);
}
.counter__label{
    font-size:.5rem;
    font-family:var(--font-btn);
    color:var(--font-secondary-dark);

}
.dia,
.hora,
.minuto{
    border-right: 1px solid var(--line-timer);
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_hora{
        width:300px;
    }
    .counter__txt{
        font-size: 90px;
    }
    .counter__content > h1{
        font-size:2rem;
    }
    .counter__label{
        font-size:.8rem;
    }

}

@media (min-width: 1025px) {
    .counter__txt{
        font-size: 140px;
    }
    .container_hora{
        width:350px;
    }
    .counter__content > h1{
        font-size:2.5rem;
    }
    .counter__label{
        font-size:1rem;
    }

}
</style>