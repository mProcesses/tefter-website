require 'jekyll'
require 'yaml'

module Jekyll
  module Polyglot
    class I18nTag < ::Liquid::Tag
      def initialize(tag_name, params, tokens)
        super
        @params = params.strip
      end

      def render(context)
        site = context.registers[:site]
        page = context.registers[:page]
        
        # Get the active language from site.active_lang (set by polyglot)
        lang = site.config['active_lang'] || site.config['default_lang'] || 'en'
        
        # Extract key and any additional parameters
        parts = @params.split(/\s+/)
        key = parts[0]
        
        # Try to get translation from site data loaded by polyglot
        # Polyglot stores translations in site.data or directly in site.config
        translations = nil
        
        # Check if polyglot has loaded translations
        if site.respond_to?(:data) && site.data.key?(lang)
          translations = site.data[lang]
        elsif site.config.key?('translations') && site.config['translations'].key?(lang)
          translations = site.config['translations'][lang]
        else
          # Try loading directly from _i18n directory
          i18n_path = File.join(site.source, '_i18n', "#{lang}.yml")
          if File.exist?(i18n_path)
            translations = YAML.load_file(i18n_path)
          end
        end
        
        return key unless translations
        
        # Support nested keys like "nav.home"
        keys = key.split('.')
        result = translations
        
        keys.each do |k|
          if result.is_a?(Hash) && result.key?(k)
            result = result[k]
          else
            return key  # Return the key itself if translation not found
          end
        end
        
        # Handle variable substitution (e.g., year=2024)
        if result.is_a?(String) && parts.length > 1
          parts[1..-1].each do |param|
            if param.include?('=')
              var_name, var_value = param.split('=', 2)
              # Evaluate liquid variables if present
              var_value = context[var_value] || var_value
              result = result.gsub("%{#{var_name}}", var_value.to_s)
            end
          end
        end
        
        result.to_s
      end
    end
  end
end

Liquid::Template.register_tag('t', Jekyll::Polyglot::I18nTag)

