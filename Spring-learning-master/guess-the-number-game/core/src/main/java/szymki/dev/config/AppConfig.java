package szymki.dev.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import szymki.dev.GameTmpl;
import szymki.dev.Interfaces.Game;
import szymki.dev.Interfaces.MessageGenerator;
import szymki.dev.Interfaces.NumberGenerator;
import szymki.dev.MessageGeneratorImpl;
import szymki.dev.NumberGeneratorimpl;

@Configuration
@Import(GameConfig.class)
@ComponentScan(basePackages = "szymki.dev")
public class AppConfig {

    //== bean methods ==
    @Bean
    public NumberGenerator numberGenerator(){
        return new NumberGeneratorimpl();
    }

    @Bean
    public Game game(){
        return new GameTmpl();
    }

    @Bean
    public MessageGenerator messageGenerator (){
        return new MessageGeneratorImpl();
    }



}
